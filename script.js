const emailRegexp = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);
// för att emailen ska ha @ och punkt i sig




//regestreringsknappen på sidan som kallar på valedirings funktionerna
$("#reg").click(function(){
    
    nameVali();

});

//namn validationen som kollar om namnet är större än 3 bokstäver eller siffror och om namnet är tilllåtet kallar den på password valederingen
function nameVali(){
    const name = $("#namn").val();
    if (name.length<3){
        alert("Namnet är för kort!")
    }
    else if (name.length>3){
        passVali();
    }
}
//Password valederingen som kollar om lösenordet är större än 5 bokstäver eller siffror och om repassword är samma som password och sen kallar på email validation
function passVali(){
    const pass = $("#password").val();
    if (pass.length<5){
        alert("Lösenordet är för kort")
    }
    else if (pass.length>5){
        const repass = $("#repassword").val();
        if(repass != pass){
            alert("Lösenordet matchar inte")
        }
        else if(repass == pass){
            emailVali();
        }
    }
}
//kollar om email inehåller @ och . och sen är kontot validerat
function emailVali(){
    const vEmail = $("#emaill").val();
    if (emailRegexp.test(vEmail) == true){
        alert("Ditt konto är gjort!!")
    }
    else if (emailRegexp.test(vEmail) == false){
        alert("Unvalid Email");
    }
}