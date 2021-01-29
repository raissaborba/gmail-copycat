/* eslint-disable no-multiple-empty-lines */

const hasNewMessage = () => Math.random() < 0.2;

const newMessage = () => {

    const senders = ['GitHub Team', 'Google', 'Apple'];
    const subjects = ['Welcome!', 'You got mail!', 'Updates'];

    const sample = array => array[Math.floor(Math.random() * array.length)];
  
  return {
    sender: sample(senders),
    subject: sample(subjects)
  };
};

const appendMessageToDom = (message) => {
  const line = `<div class="row message unread">
  <div class="col-3">
  <i class="far fa-square"></i>
  <i class="far fa-star"></i>
  <span>${message.sender}</span>
  </div>
  <div class="col-9"><span>${message.subject}</span></div>
  </div>`;
  document.getElementById('inbox').insertAdjacentHTML('afterbegin', line);
};

const updateCount = () => {
    const unreadCount = document.querySelectorAll('.message.unread').length;
    const count = document.getElementById('count');
    count.classList.add('box-red');
    count.innerText = `${unreadCount} new`;
    document.title = `Inbox (${unreadCount}) - Gmail copycat`;
}

const refresh = () => {
  if (hasNewMessage()) {
    appendMessageToDom(newMessage());
    updateCount();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000);
});

