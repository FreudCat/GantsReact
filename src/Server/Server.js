import key from "./ignore"; 

import express from "express"; 
import cors from "cors"; 
import { appendFileSync } from "fs";

const SGmail=require("@sendgrid/mail"); 
const app = express(); 
app.use(cors()); 

app.get("/", (req, res)=>{
    res.send("Welcomes to server") 
}); 

app.listen(8080);
console.log('Node server running on port 3000');

SGmail.setApiKey(key); 

function newUserEmail(email, name, feedback) {  //https://codeburst.io/sending-mails-with-sendgrid-and-node-js-6648f9485943
    const message={
        to: "Shawn@cprofessionals.com", //email variable 
        from: email, name, 
        message: feedback,
        subject: "Gants Group Contact Form Email"  
    }
    SGmail.send(message).then((sent)=> {
        //check if mail was sent 
        console.log("email sent"); 
    })
}
export default newUserEmail; 
// module.exports={newUserEmail};  


