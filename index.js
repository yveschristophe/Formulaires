var myname = document.getElementById("NAME");
var myfirstname = document.getElementById("FIRSTNAME");

function majuscule(){
  myname.value = myname.value.toUpperCase();
}
function firstletter(){
  var firstnamemaj = myfirstname.value.charAt(0).toUpperCase();
  var resteprenom = myfirstname.value.substr(1,myfirstname.value.length);
    myfirstname.value = firstnamemaj + resteprenom
}
function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}
function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}
function recupvaleur(){
  var myform = document.getElementById("formulaire");
  var myphone = myform.elements['PHONE'].value;
  var myname = myform.elements['NAME'].value;
  var myfirstname = myform.elements['FIRSTNAME'].value;
  var mymail = myform.elements['EMAIL'].value;
  var myhotel = myform.elements['HOTELNAME'].value;
  var myadults = myform.elements['numberofadults'].value;
  var mychildren = myform.elements['numberofchildren'].value;


  var allinput = myname + myfirstname + myphone + mymail + myhotel + myadults + mychildren;
  comment.innerHTML = allinput;
}
/*function valider(){
  var myerreur = document.getElementById("Erreur");
    if ( document.formulaire.elements["Mynom"].value == "" )
    {
        myerreur.innerHTML = "Veuillez entrer votre nom !";
        valid = false;
return valid;
    }
    if ( document.formulaire.elements["Firstname"].value == "" )
    {
        myerreur.innerHTML = "Veuillez entrer votre prénom !";
        valid = false;
return valid;
    }
var nombre = document.formulaire.elements["Phone"].value;
var chiffres = new String(nombre);
chiffres = chiffres.replace(/[^0-9]/g, '');
compteur = chiffres.length;

if (compteur!=10)
{
myerreur.innerHTML = "Veuillez rentrer un numéro à 10 chiffres (0690-xx-xx-xx)";

}

var country = document.getElementById("COUNTRY");
if (country.value == 0){
  myerreur.innerHTML = "Vous devez choisir un pays";
}
}/*
