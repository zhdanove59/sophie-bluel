function displayWorks(works) {
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
function displayCategories(categories){
  console.log(categories)
  const boutonsSurHtml = document.querySelector('.boutons');
  boutonsSurHtml.innerHTML=''
  let render=""
  categories.forEach(categorie => {
    console.log("categorie=",categorie)
    render +=`
    <div class="btn" >
				<a class="btn-a" href="#">${categorie.name}</a>
			</div>
      `
  })
  boutonsSurHtml.innerHTML = render
}
async function init(){
  const works=await  getWorks();
  displayWorks(works)
  const categories=await getCategories();
  displayCategories(categories)
}

init()
