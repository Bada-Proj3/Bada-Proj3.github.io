function verifpass() {
    var passwd = document.getElementById('passinS').value;
    var hasInteger = /\d/;
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    var errorMessage= "";

    if (passwd.length < 8) {
        errorMessage = 'The password must be at least 8 characters long.';
    } else if (!hasInteger.test(passwd)) {
        errorMessage = 'The password must contain at least one number.';
    } else if (!hasSpecialChar.test(passwd)) {
        errorMessage = 'The password must contain at least one special character.';
    }

    if (errorMessage !== "") {
        document.getElementById('ps').innerHTML = errorMessage;
        return false;
    } else {
        document.getElementById('ps').innerHTML = ''; 
        return true;
    }
}
function verifPrenom() {
    clearSig();
    var prenom = document.getElementById('firstname').value.trim(); 
    if (prenom !== "") {
        if (prenom.length >= 3 && chaineValide(prenom)) {
            return true;
        } else {
            document.getElementById('fr').innerHTML = 'Your first name must be alphabetic and contain at least 3 characters.';
            return false;
        }
    } else {
        document.getElementById('fr').innerHTML = 'You must enter a first name.';
        return false;
    }
}
function verifNom() {
    clearSig();
    var nom = document.getElementById('lastname').value.trim(); 
    if (nom !=="") {
        if (nom.length >= 3 && chaineValide(nom)) {
            return true;
        } else {
            document.getElementById('ls').innerHTML = 'Your last name must be alphabetic and contain at least 3 characters.';
            return false;
        }
    } else {
        document.getElementById('ls').innerHTML = 'You must enter a last name.';
        return false;
    }
}
function chaineValide(ch)
{
    i = 0;
    while(i<ch.length && ch[i].toUpperCase() >= "A" && ch[i].toUpperCase()<="Z")
    {
        i++;
    }
    return i == ch.length;
}
function veriflist() {
    clearSig();
    var lender = document.getElementById('gender');
    if (lender.value !== "") {
        document.getElementById('fd').innerHTML =''; 
        return true;
    } else {
        document.getElementById('fd').innerHTML = 'You must select your gender.';
        return false;
    }
}

function verif(){
    let users = JSON.parse(localStorage.getItem('users')) || [];
    var nom = document.getElementById('namelog').value;
    var passwd = document.getElementById('passin').value;

    if (passwd === "Admin" && nom === "Admin") {
        window.location.href = "adminPage.html";
        return false;
        
    } 
    for(let user of users){
        if(user.prenom === nom && passwd === user.modpasse){
            if(user.gender==="male"){
                window.location.href = "mens.html";
            }
            else{
                window.location.href = "womens.html";
            }
            
            return false;
            
        }
        
    }
    err = document.getElementById("ermsg");
    err.innerHTML = "User "+nom+" not found or password is incorrect, please verify your login information.";
    return false; 
}
function clearVerif()
{
    err = document.getElementById("ermsg");
    err.innerHTML = "";
}
function clearSig()
{
    document.getElementById("ls").innerHTML = '';
    document.getElementById("fr").innerHTML = '';
    document.getElementById("ps").innerHTML = '';
    document.getElementById("fd").innerHTML = '';
}
document.getElementById('val').addEventListener('submit', function(e) {
        e.preventDefault();
        if (verifPrenom() && verifNom() && veriflist() && verifpass()) {
            const prenom = document.getElementById('firstname').value;
            const nom = document.getElementById('lastname').value;
            const gender = document.getElementById('gender').value;
            const modpasse = document.getElementById('passinS').value;
            const user = {
                prenom: prenom,
                nom: nom,
                gender: gender,
                modpasse: modpasse
            };
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            this.reset();
            return window.location.href = "home.html";

        
        }
    });