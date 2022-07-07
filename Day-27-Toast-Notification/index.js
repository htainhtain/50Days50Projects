const buttonDom = document.querySelector("button");
const notificationContainerDom = document.querySelector(
  ".notification-container"
);

const notifications = [
  "notification one",
  "notification two",
  "notification three",
  "notification four",
];

const notificationColor = ["white", "green", "purple", "cyan"];

const addNotification = () => {
  const div = document.createElement("div");
  div.classList.add(`notification`);
  div.classList.add(`${notificationColor[Math.floor(Math.random() * 4)]}`);
  div.innerHTML = `<p>${notifications[Math.floor(Math.random() * 4)]}</p>`;
  notificationContainerDom.appendChild(div);
  setTimeout(() => {
    div.remove();
  }, 3000);
};

buttonDom.addEventListener("click", () => {
  addNotification();
});
