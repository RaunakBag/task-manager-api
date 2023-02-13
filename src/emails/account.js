const sgMail = require('@sendgrid/mail')


// const sendGridAPIKey = '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';

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'raunakbag97@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'raunakbag97@gmail.com',
        subject: 'Sorry to see you go :(',
        text: `Goodbye, ${name}. I hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}