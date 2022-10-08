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

  if (typeof configuration.onClick === "function") {
    (
      document.getElementsByClassName("one_notification")[0] as HTMLElement
    ).onclick = configuration.onClick;
  }
}
