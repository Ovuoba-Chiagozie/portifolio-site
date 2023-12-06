
const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  try {
    const { firstName, secondName, message, email } = req.body;
    const config = {
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "ovuobachiagozie@gmail.com",
        pass: "wtpcuwajnlgtguhe",
      },
    };
    const data = {
      from: "ovuobachiagozie@gmail.com",
      to: "ovuobachiagozie@gmail.com",
      subject: "New Client opportunity from Porfolio site",
      text: `Hey chiagozie, I'm ${firstName} ${secondName}. I'm reaching out because : ${message}, you can reach out to me at EMAIL: ${email}`,
    };
    const transporter = nodemailer.createTransport(config);
    const response = await transporter.sendMail(data);

    res.status(200).json({
      sent: true,
      message: "Message sent successful!",
      type: "success",
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({
        sent: false,
        message: "error during send, try again after 5 seconds",
        type: "error",
      });
  }
};

module.exports = {
  sendEmail,
};
