import oneNotification from "one-notification";
import "one-notification/dist/one-notification.min.css";

window.onload = function () {
    oneNotification({
        text: "Hi there! One notification is here",
        icon: "🫶",
        onClick: function () {
            console.log("Notification clicked!");
        },
    });
};
