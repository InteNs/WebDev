    function compareInput(field, compare) { 
        var first = document.getElementById(field).value;
        var second = document.getElementById(compare).value;

        if (first===second||second==''){
        	document.getElementById(field).className = "form-control";
            document.getElementById(compare).className = "form-control";
            return true;
            } else {
            document.getElementById(field).className += " falseInput";
            document.getElementById(field).className += " falseInput";
            return false;
            }
    }
    function validateInput(validate1, validate2, validate3, validate4, validate5, validate6, validate7, validate8) {
        var val;
            val = document.getElementById(validate1).value;
            if(val!='' && !compareInput(validate1, validate2)) {
                document.getElementById(validate1).className = "form-control";
                disableButton(0);
            } else {
                document.getElementById(validate1).className += " falseInput";
                disableButton(1);
            }
            val = document.getElementById(validate2).value;
            if(val!='' && !compareInput(validate2, validate1)) {
                document.getElementById(validate2).className = "form-control";
                disableButton(0);
            } else {
                document.getElementById(validate2).className += " falseInput";
                disableButton(1);
            }
            val = document.getElementById(validate3).value;
            if(val!='' && !compareInput(validate3, validate4)) {
                document.getElementById(validate3).className = "form-control";
                disableButton(0);
            } else {
                document.getElementById(validate3).className += " falseInput";
                disableButton(1);
            }
            val = document.getElementById(validate4).value;
            if(val!='' && !compareInput(validate4, validate3)) {
                document.getElementById(validate4).className = "form-control";
                disableButton(0);
            } else {
                document.getElementById(validate4).className += " falseInput";
                disableButton(1);
            }
            val = document.getElementById(validate5).value;
            if(val!='') {
                document.getElementById(validate5).className = "form-control";
                disableButton(0);
            } else {
                document.getElementById(validate5).className += " falseInput";
                disableButton(1);
            }
            val = document.getElementById(validate6).value;
            if(val!='') {
                document.getElementById(validate6).className = "form-control";
                disableButton(0);
            } else {
                document.getElementById(validate6).className += " falseInput";
                disableButton(1);
            }
            val = document.getElementById(validate7).value;
            if(val!='') {
                document.getElementById(validate7).className = "form-control";
                disableButton(0);
            } else {
                document.getElementById(validate7).className += " falseInput";
                disableButton(1);
            }
            val = document.getElementById(validate8).value;
            if(val!='') {
                document.getElementById(validate8).className = "form-control";
                disableButton(0);
            } else {
                document.getElementById(validate8).className += " falseInput";
                disableButton(1);
            }

        function disableButton(boolean) {
        if(boolean==1){
            document.getElementById("buttonReg").disabled = true;
        } else {
            document.getElementById("buttonReg").disabled = true;
        }
    }
    }