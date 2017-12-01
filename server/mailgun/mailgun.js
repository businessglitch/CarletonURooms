const api_key = 'key-1f27b10ab793d3cb5f5ffeb8e425e01d';
const domain = 'sandboxfb90e3e64e0d43739ac81fe8d3b31d1a.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

module.exports = mailgun;