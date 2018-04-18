class EmailService {
  sendText(from, to, subject, text) {
    console.log("sending email for real. yahoo!");
  }
}

module.exports = new EmailService();
