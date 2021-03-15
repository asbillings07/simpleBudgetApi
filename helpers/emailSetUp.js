const nodemailer = require('nodemailer')
const { logger } = require('../logger')
require('dotenv').config()
const { google } = require('googleapis')
const config = require('../config')
const OAuth2 = google.auth.OAuth2

// setting up our Oauth2 Client

const oauth2Client = new OAuth2(
  `${config.googleMailClientId}`,
  `${config.googleMailClientSecret}`,
  'https://developers.google.com/oauthplayground'
)

// Setting up refresh token Creds

oauth2Client.setCredentials({
  refresh_token: `${config.refreshToken}`
})

// getting out access token with all our information

const accessToken = oauth2Client.getAccessToken()

// Nodemailer function to send email to email address if valid.

exports.sendEmail = (mailOptions, successfulMessage) => {
  const creds = {
    service: 'gmail',
    secure: true,
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    },
    debug: true,
    auth: {
      type: 'OAuth2',
      user: `${config.fromEmail}`,
      clientId: `${config.googleMailClientId}`,
      clientSecret: `${config.googleMailClientSecret}`,
      refreshToken: `${config.refreshToken}`,
      accessToken
    }
  }

  const transporter = nodemailer.createTransport(creds)
  transporter.sendMail(mailOptions, (err, res) => {
    logger.log({ err })
    if (res) {
      logger.log('Sending Email')
      logger.log('RES', res)
      res.status(200).json(successfulMessage)
    } else {
      res.status(400).send({ error: `There was an error: ${err}` })
    }
  })
}
