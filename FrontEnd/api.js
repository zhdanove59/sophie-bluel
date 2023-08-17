const baseUrl="http://localhost:5678/api"

async function getWorks() {
    const result = await fetch(`${baseUrl}/works`);
    const resultJson = await result.json();
return resultJson;
}