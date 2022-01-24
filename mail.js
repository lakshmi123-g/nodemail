var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lakshmidurga.gangisetty@gmail.com',
    pass: 'Lakshmi@123'
  }
});

var mailOptions = {
  from: 'lakshmidurga.gangisetty@gmail.com',
  to: 'lakshmidurga.gangisetty@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `Hi ,  Welcome to the world`
  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});