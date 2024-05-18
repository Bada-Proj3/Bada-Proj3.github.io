
const hamBurger = document.querySelector(".one");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.remove("expand");
});
const hamBurge = document.getElementById("kk");

hamBurge.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});


/*-----------------------formulaiire---------------*/


function verifpass() {
  var passwd = document.getElementById('modpasse').value;
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
      document.getElementById('ps').innerHTML = ''; // Efface le message d'erreur précédent s'il y en avait un
      return true;
  }
}
function verifPrenom() {
  var prenom = document.getElementById('prenom').value.trim(); // Utilisation de trim() pour supprimer les espaces blancs au début et à la fin
  if (prenom !== "") {
      if (prenom.length >= 3) {
          document.getElementById('fr').innerHTML = ''; // Efface le message d'erreur précédent s'il y en avait un
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
  var nom = document.getElementById('nom').value.trim();  
  if (nom !== "") {
      if (nom.length >= 3) {
          document.getElementById('lr').innerHTML = ''; 
          return true;
      } else {
          document.getElementById('lr').innerHTML = 'Le nom doit comporter au moins 3 caractères.';
          return false;
      }
  } else {
      document.getElementById('lr').innerHTML = 'Veuillez entrer votre nom.';
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



  function nox() {
      if (verifNom() && verifpass() && verifPrenom() &&  veriflist()) {
          
          
      } else {
          
         
      }
  }
var n=0;
function toggleDisplay() {
  const cont = document.getElementById('cont');
  cont.style.display = (cont.style.display === 'none' || cont.style.display === '') ? 'block' : 'none';
}
function updateNumbers() {
  document.getElementById('nbmember').innerHTML = n;
}
/*----------------------------------------------table------------------------------------------------------------***/


function Submit(e) {
  e.preventDefault();
  const prenom = document.getElementById('prenom').value;
  const nom = document.getElementById('nom').value;
  const gender = document.getElementById('gender').value;
  const modpasse = document.getElementById('modpasse').value;
  
  const user = {
      prenom: prenom,
      nom: nom,
      gender: gender,
      modpasse: modpasse
  };

  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  updateNumbers();
  localStorage.setItem('users', JSON.stringify(users));
  Table();
  document.getElementById('userForm').reset();
 
}


function removeUser(index) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.splice(index, 1);
  n--;
  // Update local storage with updated users array
  localStorage.setItem('users', JSON.stringify(users));
  updateNumbers();
  // Re-render the table
  Table();
}

// Function to render the user table
function Table() {
  const tbody = document.getElementById('userTableBody');
  tbody.innerHTML = '';
  var cont=0;
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const adminRow = `
      <tr>
          <th scope="row">1</th>
          <td>Admin</td>
          <td>Admin</td>
          <td>Male</td>
          <td>Admin</td>
          <td></td>
      </tr>
  `;
  cont++;
  tbody.innerHTML += adminRow;
  users.forEach((user, index) => {
      const userRow = `
          <tr>
              <th scope="row">${index + 2}</th>
              <td>${user.prenom}</td>
              <td>${user.nom}</td>
              <td>${user.gender}</td>
              <td>${user.modpasse}</td>
              <td><button class="btn btn-danger" onclick="removeUser(${index})">Delete</button></td>
          </tr>
      `;
      tbody.innerHTML += userRow;
      cont++;
  });
  n=cont;
  updateNumbers();
  cont=0;
}



function toggleDisplay() {
  const cont = document.getElementById('cont');
  cont.style.display = cont.style.display === 'none' ? 'block' : 'none';
}

//event submission
document.getElementById('userForm').addEventListener('submit', Submit);

// table when page loads
document.addEventListener('DOMContentLoaded', Table);
function logout() {
  var a = confirm("Do you want to logout");
  if (a) {
      window.location.href = "log2.html";
  } else {
      return false;
  }
}