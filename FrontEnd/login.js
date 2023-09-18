async function init(){
   const submitBtn = document.querySelector('#submit-btn');
   submitBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log('user')
    const emailChamp = document.querySelector('#email').value;
    console.log(emailChamp)
    const passBtn = document.querySelector('#pass').value;
    console.log(passBtn)
     

   })
  }
  init()