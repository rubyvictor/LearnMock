const emailService = require("./EmailService");
const creditCardPaymentService = require("./CreditCardPaymentService");

const emailDouble = () => {
  const value = emailService.sendText();
  if (value === "send good news email") {
    return "congrats. you passed the test.";
  } else if (value === "send bad news email") {
    return "boo. you failed the test.";
  }
  return value;
};

const creditCardPaymentDouble = () => {
  const paymentAmount = creditCardPaymentService.payNow();
  if (paymentAmount === "pay $10") {
    return "Thanks. We just deducted $10 from your account.";
  } else if (paymentAmount === "pay $50") {
    return "Thanks. We just deducted $50 from your account.";
  }
  return paymentAmount;
};

const getIndexPage = (req, res) => {
  if (req.user.isLoggedIn()) {
    return res.send("Hi Sinon");
  }
  res.send("Oops, you need to log in to see this page");
};

module.exports = {
  emailDouble: emailDouble,
  creditCardPaymentDouble: creditCardPaymentDouble,
  getIndexPage: getIndexPage
};
