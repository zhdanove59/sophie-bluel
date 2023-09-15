const baseUrl="http://localhost:5678/api"

async function getWorks() {
    const result = await fetch(`${baseUrl}/works`);
    const resultJson = await result.json();
return resultJson;
}
async function getCategories() {
    const result = await fetch(`${baseUrl}/categories`);
    const resultJson = await result.json();
return resultJson;
}
async function getLogin(user){
    console.log(user)
    //let user = {
      //email: 'string',
      //password: 'string'
    //};
    
    let response = await fetch(`${baseUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    });
    
    let result = await response.json();
    alert(result.message);
  }
  