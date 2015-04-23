/* On blur */
function validateElement(element) {
    var regexMail       = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    var regexPassword   = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$");


    
    switch(element) {
        case 'emailreg':      if(!document.getElementById('emailreg').value===document.getElementById('emailrep').value) {
                                document.getElementById('emailreg').className += " falseInput";
                            }    
                            else {
                                document.getElementById('emailreg').className = "form-control");
                            }
                            if(!document.getElementById('emailreg').value.match(regexMail)){
                                document.getElementById('emailRegErr').innerHTML = "bla";
                            } else {
                                document.getElementById('emailRegErr').innerHTML = "";
                            }
        ;
        case 'emailrep':      if(!document.getElementById('emailrep').value===document.getElementById('emailreg').value) {
                                document.getElementById('emailrep').className += " falseInput";
                            }    
                            else {
                                document.getElementById('emailrep').className = "form-control");
                            }
                            if(!document.getElementById('emailrep').value.match(regexMail)){
                                document.getElementById('emailRepErr').innerHTML = "bla";
                            } else {
                                document.getElementById('emailRepErr').innerHTML = "";
                            }
        ;
        case passwordreg:   ;
        case passwordrep:   ;
        case surname:       ;
        case lastname:      ;
        case address:       ;
        case country:       ;
        default alert('moeite');     
    }
}

/* On submit */
function validateElements() {
    var validated       = true;
    var regexMail       = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    var regexPassword   = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$");
        /* Null check form */
        if(document.getElementById(emailreg).value=='')     validated = false;
        if(document.getElementById(emailrep).value=='')     validated = false;
        if(document.getElementById(passwordreg).value=='')  validated = false;
        if(document.getElementById(passwordrep).value=='')  validated = false;
        if(document.getElementById(surname).value=='')      validated = false;
        if(document.getElementById(lastname).value=='')     validated = false;
        if(document.getElementById(address).value=='')      validated = false;
        if(document.getElementById(country).value=='')      validated = false;
        /* REGEX Check */
        if(!(document.getElementById(emailreg).value.match(regexMail))          validated = false;
        if(!(document.getElementById(emailrep).value.match(regexMail))          validated = false;
        if(!(document.getElementById(passwordreg).value.match(regexPassword))   validated = false;
        if(!(document.getElementById(passwordrep).value.match(regexPassword))   validated = false;
        /* Response */
    return validated;
    }
}