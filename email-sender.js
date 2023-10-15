const nodemailer = require('nodemailer');

// Create a transporter object using your email provider's settings
const transporter = nodemailer.createTransport({
  service: 'tarhounihamza51@gmail.com',
  auth: {
    user: 'tarhounihamza51@gmail.com',
    pass: '',
  },
});

// Define email data
const mailOptions = {
  from: 'tarhounihamza51@gmail.com',
  to: 'hamzatarhouni25@gmail.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email from Node.js.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error: ' + error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
