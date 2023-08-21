function displayData(works) {
    console.log(works)
    const gallerySurHtml = document.querySelector('.gallery');
    gallerySurHtml.innerHTML=''
    let render=""
    works.forEach(work => {
      console.log(work)
      render +=`
        <figure>
				<img src="${work.imageUrl}" alt="${work.title}">
				<figcaption>${work.title}</figcaption>
			</figure>
        `
    });
gallerySurHtml.innerHTML = render
}
async function init(){
  const works=await  getWorks();
  displayData(works)
}

init()
//TESTE
function displayData(works) {
  console.log(works)
  const gallerySurHtml = document.querySelector('.gallery');
  gallerySurHtml.innerHTML=''
  let render=""
  works.forEach(work => {
    console.log(work)
    render +=`
      <figure>
      <img src="${work.imageUrl}" alt="${work.title}">
      <figcaption>${work.title}</figcaption>
    </figure>
      `
  });
gallerySurHtml.innerHTML = render
}
async function init(){
const works=await  getWorks();
displayData(works)
}

init()