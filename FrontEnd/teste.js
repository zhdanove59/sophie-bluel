// console.log("teste.js")
// function installeSubmitBtn() {
//     const submitbtn =document.querySelector("#submit-btn")
// submitbtn.addEventListener("click", function(){
//     const email=document.querySelector("#email").value
//     const motDePass=document.querySelector("#pass").value
//     console.log(email)
//     console.log(motDePass)
// }); 
// }
// installeSubmitBtn()
// var nombre1=8; // ne plus utiliser VAR 
//Pour declarer une variable changable on utilise LET 
//let nombre1=9; 
// Pour declarer une variable fixe on utilise CONST
//const nombre1=10;
//  nombre1=15;
//  console.log(nombre1)
const variableNumber=5;  //type de donné :numbre
const variableString="dioulo"; // type de donné : string 
const variableObjet={ variableNumber:5,variableString:"dioulo"};  // type de donne Objet
const variableTablea=[ 5 ,"dioulo"]; // type de donné :Tablea 
console.log(variableTablea)
const variableHouari={ nom:"BENKADA",prenom:"Houari",age:32};
console.log(variableHouari.nom,variableHouari.prenom) ;


console.log("je mapelle"+" "+variableHouari.prenom+"et mon nom de famille"+variableHouari.nom)
console.log(`je mapelle  ${variableHouari.prenom} et mon nom de famille ${variableHouari.nom} `) //Template literale 
const annuaire =[ { nom:"moussa",prenom:"dousa",tel:0320454545},{ nom:"MACRON", prenom:"Emmanuelle",tel:0750858596}];
console.log(annuaire[1].tel)

const equipeA="PARIS SAINT GERMAIN"
const equipeB="LOSC"
const equipeC="LENS"
const equipeD="TOULOUSE"
const equipeE="MONTPELIER"

//console.log("Nous somme l'equipe de foot"+" "+equipeA+" "+"nous somme toujours les meilleurs que "+" "+equipeB)
console.log( ` Nous somme l'equipe de foot${equipeA} nous somme toujours les meilleurs que ${equipeB}`);