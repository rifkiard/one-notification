import inject from "./one-inject";

export default function oneNotification(
  configuration: OneNotificatioConfiguration
): void {
  return inject(configuration);
}
