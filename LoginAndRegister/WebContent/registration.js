    function verifyReg(registration, repeatRegistration) { 
        var original = document.getElementById(registration).value;
        var repeat = document.getElementById(repeatRegistration).value;

        if (original===repeat||repeat==null){
        	document.getElementById(registration).className = "form-control";
            document.getElementById(repeatRegistration).className = "form-control";
            } else {
            document.getElementById(registration).className += " falseInput";
            document.getElementById(repeatRegistration).className += " falseInput";
            }
    }