function makeFriendsList(friends) {
  const unstyledList = document.createElement('UL');
  unstyledList.insertAdjacentHTML('beforeend', friends.map(friend => `<li>${friend.firstName} ${friend.lastName}</li>`).join(''));
  return unstyledList;
}
