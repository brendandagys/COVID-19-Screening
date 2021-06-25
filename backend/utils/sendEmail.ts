import nodemailer from 'nodemailer'

// async..await is not allowed in global scope, must use a wrapper
export const sendEmail = async (to: string, color: string) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  // let transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: testAccount.user, // generated ethereal user
  //     pass: testAccount.pass, // generated ethereal password
  //   },
  // });

  var smtpTransport = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  })

  var mailOptions = {
    from: process.env.GMAIL_USERNAME,
    to,
    subject: new Date().toISOString().slice(0, 10) + ' COVID-19 Screening',
    // text: message
    html: `
    <div style="background-color: '${color}'; text-align: 'center'>
      Self-Assessment Results<br />

      For: ${to}<br />

      Assessment completed Wendesday, ${new Date().toDateString()}, ${new Date()
      .toTimeString()
      .slice(0, 5)}<br />

      You are cleared to work. Please be prepared to show this confirmation at staff entrance point when reporting for your shift.<br />

      Confidentiality Notice: The contents of this email, including any attachments, may contain confidential information, personal and/or health information intended to be reviewed only by the individual(s) or organization to whom it is addressed.<br />

      If you are not the intended recipient or an authorized representative of the intended recipient, please be notified that any review, distribution, copying, saving, or disclosure is strictly prohibited. If you have received this email in error, please immediately notify the sender by return email and delete this email from your system, including from the deleted items folder. Thank you for your cooperation.
    </div>
    `,
  }

  await smtpTransport.sendMail(mailOptions)
}
// send mail with defined transport object
// let info = await transporter.sendMail({
//   from: '"Fred Foo 👻" <foo@example.com>', // sender address
//   to: "bar@example.com, baz@example.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>", // html body
// });

// exports.contact = function(req, res){
//   var name = req.body.name;
//   var from = req.body.from;
//   var message = req.body.message;
//   var to = '*******@gmail.com';
//   var smtpTransport = nodemailer.createTransport("SMTP",{
//       service: "Gmail",
//       auth: {
//           user: "******@gmail.com",
//           pass: "*****"
//       }
//   });
//   var mailOptions = {
//       from: from,
//       to: to,
//       subject: name+' | new message !',
//       text: message
//   }
//   smtpTransport.sendMail(mailOptions, function(error, response){
//       if(error){
//           console.log(error);
//       }else{
//           res.redirect('/');
//       }
//   });
// }
