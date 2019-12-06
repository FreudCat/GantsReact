const SGmail=require("@sendgrid/mail"); 



SGmail.setApiKey(key); 

function newUserEmail(email, name) {  //https://codeburst.io/sending-mails-with-sendgrid-and-node-js-6648f9485943
    const message={
        to:email,  //email variable 
        from: {email:"anguyen031@gmail.com", name:"name of user you want to email as"}, 
        message: `hoi, ${name}`,
        subject: "this is test"  
    }
    SGmail.send(message).then((sent)=> {
        //check if mail was sent 
        console.log("email sent"); 
    })
}
module.exports={newUserEmail};  


