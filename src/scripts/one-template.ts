import oneObjectToStyle from "./one-objectToStyle";

export default function oneTemplate(
  configuration: OneNotificatioConfiguration
): string {
  const configs = {
    "--o-n-icon-background-size": configuration.iconBackgroundSize
      ? configuration.iconBackgroundSize + "px"
      : undefined,
    "--o-n-icon-background-color": configuration.iconBackgroundColor,
    "--o-n-icon-size": configuration.iconSize
      ? configuration.iconSize + "px"
      : undefined,
    "--o-n-icon-color": configuration.iconColor,
    "--o-n-duration": configuration.duration,
    "--o-n-color": configuration.color,
    "--o-n-background-color": configuration.backgroundColor,
    "--o-n-font-size": configuration.fontSize
      ? configuration.fontSize + "px"
      : undefined,
    "--o-n-font-weight": configuration.fontWeight,
    "--o-n-font-family": configuration.fontFamily,
    "--o-n-icon-scale": configuration.iconScale,
    "--o-n-border-radius": configuration.borderRadius
      ? configuration.borderRadius + "px"
      : undefined,
    "--o-n-z-index": configuration.zIndex,
  };

  return `
            <div class="one_notification" style="${oneObjectToStyle(configs)}">
                <div class="one_notification-icon">
                    ${configuration.icon}
                </div>
                <div class="one_notification-text" data-text="${
                  configuration.text
                }">
                    ${configuration.text}
                </div>
            </div>
        `;
}
