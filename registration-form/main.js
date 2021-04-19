function validateAndSubmit()
{
    var username = document.getElementById("username-input").value;
    var password = document.getElementById("password-input").value;
    var phoneNumber = document.getElementById("phone-input").value;
    var email = document.getElementById("e-mail-input").value;
    var apartmentNumber = document.getElementById("number-input").value;
    var isValid = true;

    removeErrorMessages();

    if(!validateUsername(username))
    {
        displayErrorUsername();
        changeBorderColor("username-input");
        isValid=false;
    }

    if(!validatePassword(password))
    {
        displayErrorPassword();
        changeBorderColor("password-input");
        isValid=false;
    }

    if(!validatePhoneNumber(phoneNumber))
    {
        displayErrorPhoneNumber();
        changeBorderColor("phone-input");
        isValid=false;
    }

    if(!validateEmail(email))
    {
        displayErrorEmail();
        changeBorderColor("e-mail-input");
        isValid=false;
    }

    if(!validateApartmentNumber(apartmentNumber))
    {
        displayErrorApartmentNumber();
        changeBorderColor("number-input");
        isValid=false;
    }

    if(isValid==true)
    {
        //this would be the function for submitting the form
    }
}

//#region display error messages 

function displayErrorUsername()
{
    var messageContainer = document.getElementById("error-message-container-username");
    var message = document.createElement("div");
    message.setAttribute("class", "error-message");
    message.innerHTML+="Невалидно потребителско име!";
    messageContainer.appendChild(message);
}

function displayErrorPassword()
{
    var messageContainer = document.getElementById("error-message-container-password");
    var message = document.createElement("div");
    message.setAttribute("class", "error-message");
    message.innerHTML+="Поне 8 символа, вкл. цифра, главна и малка буква!";
    messageContainer.appendChild(message);
}

function displayErrorPhoneNumber()
{
    var messageContainer = document.getElementById("error-message-container-number");
    var message = document.createElement("div");
    message.setAttribute("class", "error-message");
    message.innerHTML+="Невалиден телефонен номер!";
    messageContainer.appendChild(message);
}

function displayErrorEmail()
{
    var messageContainer = document.getElementById("error-message-container-email");
    var message = document.createElement("div");
    message.setAttribute("class", "error-message");
    message.innerHTML+="Невалиден e-mail адрес!";
    messageContainer.appendChild(message);
}

function displayErrorApartmentNumber()
{
    var messageContainer = document.getElementById("error-message-container-apartment-number");
    var message = document.createElement("div");
    message.setAttribute("class", "error-message");
    message.innerHTML+="Невалиден номер на апартамент!";
    messageContainer.appendChild(message);
}

//#endregion

function changeBorderColor(inputId)
{
    var input = document.getElementById(inputId);
    input.setAttribute("class", "input-error");
}

function removeErrorMessages()
{
    var elements = document.getElementsByClassName("error-message");
    while(elements.length>0)
    {
        elements[0].remove();
    }
    var elements = document.getElementsByClassName("input-error");
    while(elements.length>0)
    {
        elements[0].setAttribute("class", "input-normal");
    }
}

//#region validating functions
//the regular expressions were found at stack overflow

function validateUsername(username)
{
    return username.length>0;
}

function validatePassword(password)
{
    return(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password));
}

function validateEmail(email)
{
    return(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email));
}

function validatePhoneNumber(phoneNumber){
    return(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phoneNumber));
}

function validateApartmentNumber(apartmentNumber){
    return apartmentNumber.length > 0;
}

//#endregion