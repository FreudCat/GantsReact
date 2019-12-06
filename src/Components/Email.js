const SGmail=require("@sendgrid/mail"); 

const key = "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"; 

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


