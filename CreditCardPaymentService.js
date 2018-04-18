class CreditCardPaymentService {
  payNow(amount) {
    console.log(`Actually deducting ${amount} from your account`);
  }
}

module.exports = new CreditCardPaymentService();
