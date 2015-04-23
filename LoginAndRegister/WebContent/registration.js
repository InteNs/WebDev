    function compareInput(field, compare) { 
        var first = document.getElementById(field).value;
        var second = document.getElementById(compare).value;

        if (first===second||second==null){
        	document.getElementById(field).className = "form-control";
            document.getElementById(compare).className = "form-control";
            } else {
            document.getElementById(field).className += " falseInput";
            }
    }