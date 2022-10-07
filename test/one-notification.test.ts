import oneNotification from "../dist/one-notification.cjs.min";

describe("OneNotification", () => {
  it("render properly", () => {
    expect(
      oneNotification({
        text: "How are you?",
        icon: "👋",
      })
    ).toBeUndefined();
  });
});
