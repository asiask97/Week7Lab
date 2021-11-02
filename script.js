
var username = document.getElementsByTagName("input")[0];
var email = document.getElementsByTagName("input")[1];
var submit =  document.getElementsByTagName("input")[2];
var form = document.getElementsByTagName("form")[0];

submit.addEventListener("click", (e) => {
    e.preventDefault();
    form.style.visibility = "hidden";
    
    //create and append new element
    var newtag = document.createElement("h1");
    var text = document.createTextNode( username.value + ", thank you for your details. We will be in touch via " + email.value + " shortly.");
    newtag.appendChild(text);
    form.parentNode.insertBefore(newtag, form.nextSibling)
});

