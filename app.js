const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
    }
});

async function sendMail() {
	try{
		let info = await transporter.sendMail({
    		from: process.env.USER_EMAIL,
    		to: "berasumit956@gmail.com",
    		subject: "Mailing System using NodeJS",
    		text: "Hello, My Friend",
    		attachments: [
		        {
		            path: __dirname + '/Files/certificate.pdf'
		        }
	    	]
  		});
  		console.log("Mail Sent: %s", info.messageId);
	}
	catch(err){
		console.log(`Error : ${err}`);
	}
}

sendMail();