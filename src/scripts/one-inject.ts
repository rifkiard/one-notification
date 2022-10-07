import oneTemplate from "./one-template";

export default function oneInject(
  configuration: OneNotificatioConfiguration
): void {
  if (!document) {
    console.error("Your environment does not support One Notification.");
    return;
  }
  document.querySelectorAll(".one_notification").forEach((e) => e.remove());
  document
    .getElementsByTagName("body")[0]
    .insertAdjacentHTML("beforeend", oneTemplate(configuration));
}
