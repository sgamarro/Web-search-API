console.log('js is alive')
 
// defining a function to display error message
function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}
// Defining a fuction to validate form
function validateForm(){
    //retriving the values of form
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName('hobbies[]')
    for (var i = 0; i < checkboxes.length ; i++){
        if(checkboxes[i].checked) {
// populate hobbies array with selected values
hobbies.push(checkboxes[i].value)
        }
    }
    //error variables with a default value
    var nameErr = emailErr = mobilErr = countryErr =  genderErr = true;
   
    // validate Name
    if (name == ''){
        printError('nameErr', 'Please enter your name');
    }else{
        var regex = /^[a-aZ-Z\s]+$/;
        if(regex.test(name)=== false){
            printError("nameErr", "print enter a valid name");
        }else{
            printError("nameErr","");
            nameErr = false;
        }
    };
    if (email == ""){
        printError('emailErr', 'Please enter your email');
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email)=== false){
            printError("emailErr", "print enter a valid email");
        }else{
            printError("emailErr","");
            emailErr = false;
        }
    }
    if(mobile == ""){
        printError('mobileErr', "Please enter your Number");
    }else{
        printError("mobileErr", "");
        mobilErr = false
    }
    if(country == "Select"){
        printError("countryErr", "Please select a country");
    }else{
        printError("countryErr", "");
        countryErr = false
    }
    if (gender == ""){
        printError("genderErr", "Please select your gender");
    }else{
        printError("genderErr","");
        genderErr = false
    }
    // Prevetn the form from being submitted if there are any error
    if ((nameErr|| mobilErr || countryErr|| genderErr) == true){
        return false;
    }else {
        //creating a string from input data for preview
        var dataPreview = `You've entered the following details: <br>
        Full name: ${name}<br>
        Email: ${email}<br>
        Phone Number: ${mobile}<br>
        Gender: ${gender} <br>
        Country: ${country}`;
        alert(dataPreview);
    }
};
