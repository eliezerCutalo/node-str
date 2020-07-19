var config = require('../config')

const sgMail = require('@sendgrid/mail');

exports.send = async(to, subject, body) => {

    sgMail.setApiKey(config.sendgridKey);
    console.log(config.sendgridKey)
    const msg = {
        to: to,
        from: 'eliezercsj@gmail.com',
        subject: subject,
        text: subject,
        html: body
    };
    sgMail.send(msg).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
    });
}


