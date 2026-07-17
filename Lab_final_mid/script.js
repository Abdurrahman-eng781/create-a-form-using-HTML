let attempts = 0;

document.getElementById("clubForm").addEventListener("submit", function(event){

event.preventDefault();

let fname = document.getElementById("fname").value.trim();
let lname = document.getElementById("lname").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value;
let category = document.getElementById("category").value;
let reason = document.getElementById("reason").value.trim();

let gender = document.querySelector('input[name="gender"]:checked');

let clubs = document.querySelectorAll('input[name="club"]:checked');

let message = document.getElementById("message");

let namePattern = /^[A-Za-z]+$/;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passPattern = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

if(fname=="" || !namePattern.test(fname))
{
    message.innerHTML="Enter valid first name.";
    return;
}

if(lname=="" || !namePattern.test(lname))
{
    message.innerHTML="Enter valid last name.";
    return;
}

if(!emailPattern.test(email))
{
    message.innerHTML="Invalid email.";
    return;
}

if(!passPattern.test(password))
{
    attempts++;

    if(attempts>3)
    {
        document.getElementById("password").disabled=true;
        message.innerHTML="Password locked after 3 attempts.";
    }
    else
    {
        message.innerHTML="Invalid password.";
    }

    return;
}

if(gender==null)
{
    message.innerHTML="Select gender.";
    return;
}

if(clubs.length==0)
{
    message.innerHTML="Select at least one club.";
    return;
}

if(category=="")
{
    message.innerHTML="Select category.";
    return;
}

if(reason.length<20)
{
    message.innerHTML="Reason must be at least 20 characters.";
    return;
}

message.style.color="green";
message.innerHTML="Registration Successful!";

});