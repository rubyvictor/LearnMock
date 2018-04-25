beforeEach(() => {
  jest.resetModules();
});

// AddUser function for SPY
const user = {
  addUser: name => {
    this.name = name;
  }
};

describe("User controller should not actually send email", () => {
  it.skip("should return congrats you passed test", () => {
    jest.doMock("./EmailService.js", function() {
      return { sendText: jest.fn(() => "send good news email") };
    });
    const user_controller = require("./user_controller");
    const value = user_controller.emailDouble();

    expect(value).toEqual("congrats. you passed the test.");
  });

  it.skip("should return boo you failed test", () => {
    jest.doMock("./EmailService.js", function() {
      return { sendText: jest.fn(() => "send bad news email") };
    });
    const user_controller = require("./user_controller");
    const value = user_controller.emailDouble();

    expect(value).toEqual("boo. you failed the test.");
  });
});

describe("User Controller should not make actual payment", () => {
  it.skip("should return payment of $10", () => {
    jest.doMock("./CreditCardPaymentService.js", function() {
      return { payNow: jest.fn(() => "pay $10") };
    });
    const user_controller = require("./user_controller");
    const payment = user_controller.creditCardPaymentDouble(10);

    expect(payment).toEqual("Thanks. We just deducted $10 from your account.");
  });

  it("should return payment of $50", () => {
    jest.doMock("./CreditCardPaymentService.js", function() {
      return { payNow: jest.fn(() => "pay $50") };
    });

    var user_controller = require("./user_controller");
    const payment = user_controller.creditCardPaymentDouble(50);

    expect(payment).toEqual("Thanks. We just deducted $50 from your account.");
  });

  describe("Using sinon SPY", () => {
    it.skip("should return the index page", () => {
      const sinon = require("sinon");
      const user_controller = require("./user_controller");
      let req = {};
      let res = {
        send: sinon.spy()
      };
      user_controller.getIndexPage(req, res);
      // console.log(res.send);
      expect(res.send.calledOnce).toEqual(true); // should log list of all methods available to make assertions for test
    });

    it.skip("should send Hi Sinon", () => {
      const sinon = require("sinon");
      const user_controller = require("./user_controller");
      let req = {};
      let res = { send: sinon.spy() };
      user_controller.getIndexPage(req, res);
      expect(res.send.firstCall.args[0]).toEqual("Hi Sinon"); //Try making this test fail
    });

    it.skip("should add user", () => {
      const sinon = require("sinon");

      sinon.spy(user, "addUser");
      user.addUser("Mr Anybody");
      // console.log(user.addUser);
      expect(user.addUser.calledOnce).toEqual(true);
    });

    it.skip("should send Hi Sinon when logged in", () => {
      const sinon = require("sinon");
      const user_controller = require("./user_controller");

      let user = {
        isLoggedIn: () => {}
      };

      // stub isLoggedIn function and make it return true always
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);
      // pass user into req object
      let req = {
        user: user
      };

      let res = { send: sinon.spy() };

      user_controller.getIndexPage(req, res);
      console.log(res.send);
      expect(res.send.calledOnce).toEqual(true);
      expect(res.send.firstCall.args[0]).toEqual("Hi Sinon");

      user_controller.getIndexPage(req, res);
      expect(isLoggedInStub.calledTwice).toEqual(true);
    });

    it("should send Hi Sinon when logged in, USING MOCK", () => {
      const sinon = require("sinon");
      const user_controller = require("./user_controller");

      let user = { isLoggedIn: () => {} };

      // stub isLoggedIn function and make it return true always
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);
      // pass user into req object
      let req = { user: user };

      let res = { send: () => {} };

      const mock = sinon.mock(res);
      // build how we expect it to work. i.e. fake the func
      mock
        .expects("send")
        .once()
        .withExactArgs("Hi Sinon");

      user_controller.getIndexPage(req, res);
      expect(isLoggedInStub.calledOnce).toEqual(true);

      mock.verify();
    });
  });
});
