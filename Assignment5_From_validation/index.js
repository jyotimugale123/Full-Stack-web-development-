function validate(){
    var firstName=document.querySelector('#firstName')
    var lastName=document.querySelector('#lastName')
    var emailAddress=document.querySelector('#emailAddress')
    var mobileNumber=document.querySelector('#mobileNumber')
    var errorMessage=document.querySelector('#errorMessage')
    if(firstName.value==""|| lastName.value==""|| emailAddress.value=="" || mobileNumber.value=="")
    console.log("All fields are mandatory.")
    errorMessage.innerHTML="All fields are mandatory.";
    if(firstName.value==""){
        firstName.style.animation="errorAnimation linear 2s";
        // firstName.style.border="2px solid black;"
    }
    else if(lastName.value==""){
        firstName.style.animation="errorAnimation linear 2s";
        //firstName.style.border="2px solid black;"
    }
    else if(emailAddress.value==""){
        firstName.style.animation="errorAnimation linear 1s";
        //firstName.style.border="2px solid black;"
    }
    else if(mobileNumber.value==""){
        firstName.style.animation="errorAnimation linear 1s";
        //firstName.style.border="2px solid black;"
    }
} else{
    errorMessage.innerHTML="";
}