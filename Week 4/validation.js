 function validate(form){
    var name = form.name.value;
    var user = form.username.value;
    var email = form.email.value;
    var password = form.password.value;
    if(name == "" | user == ""
        | email == "" | password == ""){
        alert("One or more fields of the form emty");
        return;
    }
    var upattern = /^[a-zA-Z0-9]+$/;
    var epattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var ppattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}/gm
    if(!user.match(upattern)){
        alert("Invalid Username")
    }else if(!email.match(epattern)){
        alert("Invalid Email Address")
    }else if(!password.match(ppattern)){
        alert("Weak password")
    }
}
