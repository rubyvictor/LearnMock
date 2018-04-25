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

const creditCardPaymentDouble = (amount) => {
  const paymentAmount = creditCardPaymentService.payNow(amount);
  if (paymentAmount === `pay $${amount}`) {
    return `Thanks. We just deducted $${amount} from your account.`;
  } else if (paymentAmount === `pay $${amount}`) {
    return `Thanks. We just deducted $${amount} from your account.`;
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
