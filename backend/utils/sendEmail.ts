var nodemailer = require('nodemailer')

export const sendEmail = async (
  to: string,
  color: string,
  fontColor: string,
  submitTimeStamp: string
) => {
  let smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SCREENING_GMAIL_USERNAME,
      pass: process.env.SCREENING_GMAIL_PASSWORD,
    },
  })

  let mailOptions = {
    from: `'COVID-19 Screening' <${process.env.SCREENING_GMAIL_USERNAME}>`,
    to,
    subject: 'COVID-19 Screening - ' + new Date().toISOString().slice(0, 10),
    html: `
    <div style="color: ${fontColor}; background-color: ${color}; text-align: center; border-radius: 10px; padding: 10px">
      <h2>
        Self-Assessment Results
      </h2>

      <h3>
        For: ${to}
      </h3>

      <h4>
        Assessment completed: ${submitTimeStamp}
      </h4>

      <h5>
        You are cleared to work. Please be prepared to show this confirmation at staff entrance point when reporting for your shift.<br /><br />

        Confidentiality Notice: The contents of this email, including any attachments, may contain confidential information, personal and/or health information intended to be reviewed only by the individual(s) or organization to whom it is addressed.<br /><br />

        If you are not the intended recipient or an authorized representative of the intended recipient, please be notified that any review, distribution, copying, saving, or disclosure is strictly prohibited. If you have received this email in error, please immediately notify the sender by return email and delete this email from your system, including from the deleted items folder. Thank you for your cooperation.
      </h5>
    </div>
    `,
  }

  //   <div style="background-color: '${color}'; text-align: 'center'>
  //   Self-Assessment Results<br />

  //   For: ${to}<br />

  //   Assessment completed Wendesday, ${new Date().toDateString()}, ${new Date()
  //   .toTimeString()
  //   .slice(0, 5)}<br />

  //   You are cleared to work. Please be prepared to show this confirmation at staff entrance point when reporting for your shift.<br />

  //   Confidentiality Notice: The contents of this email, including any attachments, may contain confidential information, personal and/or health information intended to be reviewed only by the individual(s) or organization to whom it is addressed.<br />

  //   If you are not the intended recipient or an authorized representative of the intended recipient, please be notified that any review, distribution, copying, saving, or disclosure is strictly prohibited. If you have received this email in error, please immediately notify the sender by return email and delete this email from your system, including from the deleted items folder. Thank you for your cooperation.
  // </div>

  await smtpTransport.sendMail(
    mailOptions,
    (err: any, res: { response: string }) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Mail response: ' + res.response)
      }
    }
  )
}
