console.log("teste.js")
function installeSubmitBtn() {
    const submitbtn =document.querySelector("#submit-btn")
submitbtn.addEventListener("click", function(){
    const email=document.querySelector("#email").value
    const motDePass=document.querySelector("#pass").value
    console.log(email)
    console.log(motDePass)
}); 
}
installeSubmitBtn()