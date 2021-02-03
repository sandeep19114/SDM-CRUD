var validate = () => {
    let roll = document.aform.roll.value;
    let clas = document.aform.year.value + '-' + document.aform.sem.value;

    let pat = /[0-9]{5}[a-zA-Z]{1}[0-9]{4}/gi;
    if(!(pat.test(roll))) {
        alert("Enter valid roll no.");
        return false;
    }
    if(!((clas[0]  == 'i') && (clas[clas.length - 1] == 'i'))) {
        alert("Enter valid class");
        return false;
    }
    return true;
}

var callBlur = (k) => {
    let roll = document.aform.roll.value;
    let clas1 = document.aform.year.value;
    let clas2 = document.aform.sem.value; 
    if((k == 1) && (roll == ""))
        document.getElementById("roll").style.borderColor = "#ff0000";
    if((k == 2) && (clas1 == "Year")) 
        document.getElementById("year").style.borderColor = "#ff0000"; 
    if((k == 3) && (clas2 == "Sem"))
        document.getElementById("sem").style.borderColor = "#ff0000";
}

var callFocus = (k) => {
    if(k == 1)
        document.getElementById("roll").style.borderColor = "";
    if(k == 2)
        document.getElementById("year").style.borderColor = "";
    if(k == 3)
        document.getElementById("sem").style.borderColor = "";
}
