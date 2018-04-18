beforeEach(() => {
  jest.resetModules();
});

describe("User controller should not actually send email", () => {
  it("should return congrats you passed test", () => {
    jest.doMock("./EmailService.js", function() {
      return { sendText: jest.fn(() => "send good news email") };
    });
    const user_controller = require("./user_controller");
    const value = user_controller.emailDouble();

    expect(value).toEqual("congrats. you passed the test.");
  });

  it("should return boo you failed test", () => {
    jest.doMock("./EmailService.js", function() {
      return { sendText: jest.fn(() => "send bad news email") };
    });
    const user_controller = require("./user_controller");
    const value = user_controller.emailDouble();

    expect(value).toEqual("boo. you failed the test.");
  });
});

describe("User Controller should not make actual payment", () => {
  it("should return payment of $10", () => {
    jest.doMock("./CreditCardPaymentService.js", function() {
      return { payNow: jest.fn(() => "pay $10") };
    });
    const user_controller = require("./user_controller");
    const payment = user_controller.creditCardPaymentDouble();

    expect(payment).toEqual("Thanks. We just deducted $10 from your account.");
  });

  it("should return payment of $50", () => {
    jest.doMock("./CreditCardPaymentService.js", function() {
      return { payNow: jest.fn(() => "pay $50") };
    });

    var user_controller = require("./user_controller");
    const payment = user_controller.creditCardPaymentDouble();

    expect(payment).toEqual("Thanks. We just deducted $50 from your account.");
  });
});
