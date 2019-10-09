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
          service: 'Godaddy',
          host: "smtpout.secureserver.net",  
          secureConnection: true,
          port: 465,
            auth: {
              user: 'info@cloudhomesdevelopers.com',
              pass: 'Pass@1234'
            }
          });
          // TODO : Validation
          const {name, email, mobile, message} = req.body; // re-structing 
    
          if(!email || !mobile) {
            throw new Error("Email and phone number is required");
          }
          var mailOptions = {
          
            from: 'info@cloudhomesdevelopers.com',
            to: 'cloudhomesdevelopers@gmail.com',
            subject: 'User query!!!',
            html: `<h4>Name : ${name || 'user'} <br></br> Email: ${email}  <br></br>  Mobile: ${mobile}</h4>
            <h3>message:</h3> <p>${message}</p> <p></p> <h4>Best regards,<br></br>cloudhomesdevelopers.com</h4>`

          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                throw new Error("Something went wrong! Please try again.");
            } else {
              console.log('Email sent: ' + info.response); 
              res.json({success: true, message: 'Your message has been sent.'});
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