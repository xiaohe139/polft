// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "../core/Polft721.sol";
import "../../interfaces/IERC4907.sol";

contract Polft721Rentable is Polft721, IERC4907 {
  struct UserInfo 
  {
      address user;   // address of user role
      uint64 expires; // unix timestamp, user expires
  }

  mapping (uint256  => UserInfo) internal _users;

  function setUser(uint256 tokenId, address user, uint64 expires) public virtual override(IERC4907) {
      require(_isApprovedOrOwner(msg.sender, tokenId), "ERC4907: transfer caller is not owner nor approved");
      UserInfo storage info =  _users[tokenId];
      info.user = user;
      info.expires = expires;
      emit UpdateUser(tokenId, user, expires);
  }

  function userOf(uint256 tokenId) public view virtual override(IERC4907) returns(address){
      if( uint256(_users[tokenId].expires) >=  block.timestamp){
          return  _users[tokenId].user;
      }
      else{
          return address(0);
      }
  }

  function userExpires(uint256 tokenId) public view virtual override(IERC4907) returns(uint256){
      return _users[tokenId].expires;
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override(Polft721) returns (bool) {
    return interfaceId == type(IERC4907).interfaceId || super.supportsInterface(interfaceId);
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 tokenId
  ) internal virtual override(Polft721){
      super._beforeTokenTransfer(from, to, tokenId);

      if (from != to && _users[tokenId].user != address(0)) {
          delete _users[tokenId];
          emit UpdateUser(tokenId, address(0), 0);
      }
  }
}