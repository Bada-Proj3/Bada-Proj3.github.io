function verifpass() {
    var passwd = document.getElementById('passinS').value;
    var hasInteger = /\d/;
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    var errorMessage = "";

    if (passwd.length < 8) {
        errorMessage = 'Le mot de passe doit comporter au moins 8 caractères.';
    } else if (!hasInteger.test(passwd)) {
        errorMessage = 'Le mot de passe doit contenir au moins un chiffre.';
    } else if (!hasSpecialChar.test(passwd)) {
        errorMessage = 'Le mot de passe doit contenir au moins un caractère spécial.';
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
    var prenom = document.getElementById('firstname').value.trim(); 
    if (prenom !== "") {
        if (prenom.length >= 3) {
            document.getElementById('fr').innerHTML = ''; 
            return true;
        } else {
            document.getElementById('fr').innerHTML = 'Le prénom doit comporter au moins 3 caractères.';
            return false;
        }
    } else {
        document.getElementById('fr').innerHTML = 'Veuillez entrer votre prénom.';
        return false;
    }
}
function verifNom() {
    var nom = document.getElementById('lastname').value.trim();  
    if (nom !== "") {
        if (nom.length >= 3) {
            document.getElementById('ls').innerHTML = ''; 
            return true;
        } else {
            document.getElementById('ls').innerHTML = 'Le nom doit comporter au moins 3 caractères.';
            return false;
        }
    } else {
        document.getElementById('ls').innerHTML = 'Veuillez entrer votre nom.';
        return false;
    }
}
function veriflist() {
    var lender = document.getElementById('gender');
    if (lender.value !== "") {
        document.getElementById('fd').innerHTML =''; 
        return true;
    } else {
        document.getElementById('fd').innerHTML = 'Veuillez sélectionner un genre.';
        return false;
    }
}

    function verif(){
        let users = JSON.parse(localStorage.getItem('users')) || [];
        var nom = document.getElementById('namelog').value;
        var passwd = document.getElementById('passin').value;
        if (passwd === "Admin" && nom === "Admin") {
            window.location.href = "ppppp/fff.html";
            return false;
            
        } 
        for(let user of users){
            if(user.prenom === nom && passwd === user.modpasse){
                window.location.href = "ppppp/fff.html";
                return false;
                
            }
            
        }
        alert("User : "+nom +" not found !!! Fix information ");
        return false; 
    }
    document.getElementById('val').addEventListener('submit', function(e) {
            e.preventDefault();
            if (verifNom() && verifpass() && verifPrenom() &&  veriflist()) {
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
                return window.location.href=' ppppp/fff.html';
            
            }
        });