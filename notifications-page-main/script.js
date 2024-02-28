const unread = document.querySelectorAll(".notif-wrapper.unread");
const notifWrapper = document.querySelectorAll(".notif-wrapper");
const notifCounter = document.getElementById("notif-counter");
const unreadBtn = document.getElementById("mark-as-unread");
const single = document.querySelectorAll(".notif-wrapper.unread");

notifCounter.innerText = unread.length;


unread.forEach((message) => {
    unreadBtn.addEventListener("click", () => {
        message.classList.remove("unread");
        const notifCounter = document.getElementById("notif-counter");
        const unread = document.querySelectorAll(".notif-wrapper.unread");
        notifCounter.innerText = unread.length;
    })
});

notifWrapper.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("unread");
        const unread = document.querySelectorAll(".notif-wrapper.unread");
        const notifCounter = document.getElementById("notif-counter");
        notifCounter.innerText = unread.length;
    })
});
