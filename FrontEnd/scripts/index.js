


// fetch pour récupérer les données de l'API
async function communiquer() {
    const reponse = await fetch(`${baseUrl}works`)
    const data = await reponse.json()
    return data
}

// fonction pr retirer du HTML les travaux de la gallery mis en dur dans le fichier index.html
function suppressionHtmlGallery() {
    document.querySelector(".gallery").innerHTML = ""
}


// Récupération des images + title qu'il faudra mettre dans une balise figcaption à l'interieur des balises figures
function recupImageTitle(data, container) {
    for (i = 0; i < data.length; i++) {
        const article = data[i]
        // Récupération du conteneur ou l'on va générer les figures
        const containerGallery = document.querySelector(container)
        // Création des figures à l'intérieur de gallery
        const figureDynamique = document.createElement("figure")
        figureDynamique.style.position = 'relative'
        // creation des icones pour la modale
        if (container === '.modal-gallery') {
            const divModalIcon = document.createElement('div')
            divModalIcon.classList.add('modal-gallery-icon')
            figureDynamique.appendChild(divModalIcon)
            const divEnlarge = document.createElement('div')
            divEnlarge.classList.add('bg-icon')
            const iconEnlarge = document.createElement('i')
            iconEnlarge.classList.add('fa-solid', 'fa-arrows-up-down-left-right')
            const divTrash = document.createElement('div')
            divTrash.classList.add('bg-icon')
            const iconTrash = document.createElement('i')
            iconTrash.classList.add('fa-solid', 'fa-trash-can')
            iconTrash.id = article.id
            if ( i === 0) {
                divModalIcon.appendChild(divEnlarge)
                divEnlarge.appendChild(iconEnlarge)
                divModalIcon.appendChild(divTrash)
                divTrash.appendChild(iconTrash)
            } else {
                divModalIcon.appendChild(divTrash)
                divTrash.appendChild(iconTrash)
            }
        }
        // Création des img dans les figures
        const figureImage = document.createElement("img")
        figureImage.src = article.imageUrl
        // Création des figcaption dans les figures
        const figureCaption = document.createElement("figcaption")
        figureCaption.innerText = (container === '.gallery' ? article.title : 'Éditer')
        // On rattache les balises figures à la gallery
        containerGallery.appendChild(figureDynamique)
        figureDynamique.appendChild(figureImage)
        figureDynamique.appendChild(figureCaption)
    }
}


// Récupération des catégories avec fetch
async function getCategoryId() {
    const reponseId = await fetch(`${baseUrl}categories`)
    const dataId = await reponseId.json()
    return dataId
}


// fonction pour insérer les filtres
function listeButtonDynamique(dataId) {
    // Récupération du conteneur
    const sectionPortFolio = document.querySelector("#portfolio")
    // Création de la div accueillant les filtres
    const divFiltre = document.createElement("div")
    divFiltre.classList.add("flexButton")
    // Insérer la divFiltre entre h2 et div.gallery soit avant div.gallery
    const divGallery = sectionPortFolio.querySelector("div")
    sectionPortFolio.insertBefore(divFiltre, divGallery)
    for (let i = -1; i < dataId.length; i++) {
        const buttonElement = document.createElement("button")
        buttonElement.classList.add('b_filter')
        if (i === -1) {
            buttonElement.innerText = "Tous"
        } else {
            buttonElement.innerText = dataId[i].name
        }
        divFiltre.appendChild(buttonElement)
    }
}


// fonction qui fait la mise en forme des boutons et applique le filter sur les gallery
function miseEnFormeButtonEtFilterGallery() {
    const buttons = document.querySelectorAll(".b_filter");
  
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event) {
            buttons.forEach(button => {
                if (button.classList.contains('button_selected')) {
                    button.classList.remove('button_selected');
                }
            });
            // récupération de l'index sur le bouton que l'on clique de l'array buttonIndex
            const buttonIndex = Array.from(buttons).indexOf(event.target)
            if (!buttons[buttonIndex].classList.contains('button_selected')) {
                buttons[buttonIndex].classList.add('button_selected');
            }
            suppressionHtmlGallery()
            communiquer().then(data => {
                let filteredData
                if (buttonIndex === 0) {
                    filteredData = data
                } else {
                    filteredData = data.filter(work => work.categoryId === (buttonIndex))
                }
                recupImageTitle(filteredData, ".gallery")
            })
      })
    }
}

// Après la connexion reussie via le login, on récupère le userId et token qui a été stocké dans localstorage
function modeEdition() {
    const dataString = localStorage.getItem("data")
    if (dataString) {
        const data = JSON.parse(dataString)
        const userId = data.userId
        const token = data.token
        // Faire toute les étapes du mode édition
        if (token) {
        // 1. bandeau noir en haut de la page
            const BodyDynamique = document.querySelector("body")
            const divEdition = document.createElement("div")
            divEdition.classList.add("flexcenter", "bandeau", "gap")
            const header = document.querySelector("header")
            BodyDynamique.insertBefore(divEdition, header)
            const iconeHeader = document.createElement("i")
            iconeHeader.classList.add("far",  "fa-pen-to-square")
            const paragrapheHeader = document.createElement("p")
            paragrapheHeader.innerText = "Mode Edition"
            const divPublier = document.createElement("div")
            divPublier.classList.add("flexcenter", "bulle")
            const pDansBulleBlanche = document.createElement("p")
            pDansBulleBlanche.innerText = "Publier les changements"
            divEdition.appendChild(iconeHeader)
            divEdition.appendChild(paragrapheHeader)
            divEdition.appendChild(divPublier)
            divPublier.appendChild(pDansBulleBlanche)
            // 2. ajouter l'icone + paragraphe modifier en dessous de l'image
            const figureIntroduction = document.querySelector("figure")
            const figCaptionImg = document.createElement('figcaption')
            figCaptionImg.classList.add("flex_image")
            const iconeImg = document.createElement("i")
            iconeImg.classList.add("far", "fa-pen-to-square")
            const pImg = document.createElement("p")
            pImg.innerText = "Modifier"
            figureIntroduction.appendChild(figCaptionImg)
            figCaptionImg.appendChild(iconeImg)
            figCaptionImg.appendChild(pImg)
            // 3. ajouter l'icone + paragraphe modifier à coté de projet
            const sectionPortFolio = document.querySelector("#portfolio")
            const mesProjets = sectionPortFolio.querySelector("h2")
            const divFilter = document.querySelector(".flexButton")
            const divTitrePortfolio = document.createElement("div")
            divTitrePortfolio.classList.add("flexcenter", "gap_titrePortfolio")
            const lienIconTexte = document.createElement("a")
            lienIconTexte.setAttribute('href', '#modal1')
            lienIconTexte.classList.add("flexcenter", "gap", "js-modal")
            const iconMesProjets = document.createElement("i")
            iconMesProjets.classList.add("far",  "fa-pen-to-square")
            const pMesProjets = document.createElement("p")
            pMesProjets.innerText = "Modifier"
            sectionPortFolio.insertBefore(divTitrePortfolio, divFilter)
            divTitrePortfolio.appendChild(mesProjets)
            divTitrePortfolio.appendChild(lienIconTexte)
            lienIconTexte.appendChild(iconMesProjets)
            lienIconTexte.appendChild(pMesProjets)
            // 4. display none de la divFiltre
            divFilter.style.display = "none"
            // 5. le login doit passer en logout + a l'action du clic, on sort du mode édition
            const aLog = document.querySelector("#log")
            aLog.innerText = "logout"
            aLog.addEventListener('click', () => {
                localStorage.removeItem('data')
                window.location.reload()
            })
            // 6. ajouter l'icone + paragraphe devant article description
            const articleDesignerEspace = document.querySelector('article')
            const articleH2 = articleDesignerEspace.querySelector('h2')
            const divArticleDesigner = document.createElement('div')
            divArticleDesigner.classList.add('gap')
            divArticleDesigner.style.display = "flex"
            divArticleDesigner.style.marginBottom = '15px'
            const iconArticleDesigner = document.createElement('i')
            iconArticleDesigner.classList.add('far', 'fa-pen-to-square')
            const pArticleDesigner = document.createElement('p')
            pArticleDesigner.innerText = 'Modifier'
            articleDesignerEspace.insertBefore(divArticleDesigner, articleH2)
            divArticleDesigner.appendChild(iconArticleDesigner)
            divArticleDesigner.appendChild(pArticleDesigner)
        }
    }
}



// fonction permettant de passer toute les fonctions à cause de l'asynchrone
async function init() {
    const data = await communiquer()
    suppressionHtmlGallery()
    recupImageTitle(data, ".gallery")
    const dataId = await getCategoryId()
    listeButtonDynamique(dataId)
    miseEnFormeButtonEtFilterGallery()
    modeEdition()
    manageModal()
}
init()


