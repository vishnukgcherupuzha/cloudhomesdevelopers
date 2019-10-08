const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/api/form', (req, res) => {
    console.log(req.body);
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            auth: {
              user: 'cloudhomesdevelopers@gmail.com',
              pass: 'Pass@123'
            }
          });
          // TODO : Validation
          const {name, email, mobile, message} = req.body; // re-structing 
    
          if(!email || !mobile) {
            throw new Error("Please check your email and phone number");
          }
          var mailOptions = {
            from: 'cloudhomesdevelopers@gmail.com',
            to: 'vishnukgcherupuzha@gmail.com', //info@cloudhomesdevelopers.com
            subject: 'User query!!!',
            text: `User : ${name || 'user'}, Email: ${email}, Mobile: ${mobile}, message: ${message}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                throw new Error("Something went wrong! Please try again.");
            } else {
              console.log('Email sent: ' + info.response);
              res.json({success: true, message: 'Your request has been sent successfully. We will contact you soon.'});
              res.status(200);
            }
          });
    }
    catch(err) {
        console.log(err.message);
        const message = err.message || 'Something went wrong!'
        res.json({ message, success: false })
        res.status(400);        
    }
})

const PORT = process.env.PORT || 3001 

app.listen(PORT, () => {
    console.log(`Server listeting on port ${PORT}`)
})