const request = require('request');
const secretKey= "Insert secret key here";

recaptchaApi = (verifyCode) => {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${verifyCode}`;

    request(verifyUrl,(err, response, body) => {
        body = JSON.parse(body);
        console.log(body);
    })
}

module.exports = recaptchaApi;