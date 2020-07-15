const alert = document.querySelector('.alert');
const alertBtn = document.querySelector('.btn-alert-x');
const dot = document.querySelector('.dot');
const userSearch = document.querySelector('.message-info');
const search = document.querySelector('.search');
const message = document.querySelector('.message');

alert.addEventListener('click', () => {
    alert.style.display = "none";
    dot.style.display = "none";
  });

userSearch.addEventListener('submit', (e) => {
  e.preventDefault();
  let searchUser = search.value;
  let messageUser = message.value;
  if (searchUser == '' && messageUser == '') {
    window.alert('You have not entered a username or message.');
  } else if (searchUser == '') {
    window.alert('Please enter a username.');
  } else if (messageUser == '') {
    window.alert('Please enter a message...');
  } else {
    window.alert('Message Sent!');
  }
});