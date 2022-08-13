const express = require("express");
const parser = require("body-parser");
const path = require("path");
const exp = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.engine('handlebars', exp.engine());
app.set('view engine', 'handlebars');

staticPath  = path.join(__dirname,"/public");
app.use(express.static(staticPath));
console.log(staticPath);



app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.locals.layout = false;
app.get("/page.html", (request, response) => {
  response.render('page'); 
  // response.sendFile(path.join(__dirname,"/page-2-contact.html"))
});


app.post('/', (req, res) => {
    console.log(req.body);
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
    console.log(output);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: '',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: '', 
          pass: ''  
      },
      tls:{
        rejectUnauthorized:false
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"', // sender address
        to: '', // list of receivers
        subject: 'Website Contact Request', // Subject line
        text: '', // plain text body
        html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        res.render('contact', {msg:'Email has been sent'});
    });
    });
  
  app.listen(3000, () => console.log('Server started...'));