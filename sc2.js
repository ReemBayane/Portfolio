ctct.onclick=function sendEmail() {
var msg = prompt('merci de laisser votre message');
if (msg.length > 0  ){

    var body = "<html><h2>Header</h2><strong>" +msg+"</strong><br></br><em>Italic</em></html>";
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "<Mailtrap username>",
        Password : "<Mailtrap password>",
        To : 'bayane.rim@gmail.com',
        From : "",
        Subject : "Contact email",
        Body : body
    }).then(
      message => alert('Thanks') );
   
    }
}

  