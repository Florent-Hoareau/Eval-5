

// -------------- Script pour la recherche dynamique GALERIE ------------

// Je crée mes 2 variables filters et imgages qui vont venir taper sur mes 7 filtres
// et images va tenir taper sur toutes les img dans #galery



let filters = document.querySelectorAll("#filters div")
let images = document.querySelectorAll("#galery img")


for (let filter of filters) {
    filter.addEventListener("click", () => {
        let category = filter.id

    for (let image of images) {
        image.classList.replace("active", "inactive")
    
        if(category in image.dataset) {
            image.classList.replace("inactive", "active")
        } else if (category === "all") {
            image.classList.replace("inactive", "active")
        }
    }

})

}




// -------------- Script pour flip Cartes Tarifs  ------------


let cards = document.querySelectorAll(".card_inner")

    for (let card of cards) {
    card.addEventListener("click", () => {
        card.classList.toggle("is-flipped")
    })
}

    


