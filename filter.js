const products2 = [
    {
        photo: "./assets/store/hills_sterilised_cat.jpg",
        name: 'Gato Adulto Esterilizado',
        category: 'food',
        seller: 'Hills',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '20€',
    },
    {
        photo: "./assets/store/hills_metabolic.jpg",
        name: 'Gato Adulto Metabolic',
        category: 'food',
        seller: 'Hills',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '30€',
    },
    {
        photo: "./assets/store/hills_kitten.jpg",
        name: 'Gato cachorro',
        category: 'food',
        seller: 'Hills',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '40€',
    },
    {
        photo: "./assets/store/royal_canin_digestive.jpg",
        name: 'Gato Adulto Digestivo',
        category: 'food',
        seller: 'Royal Canin',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '50€',
    },
    {
        photo: "./assets/store/royal_canin_regular_sterilised.jpg",
        name: 'Gato Adulto Regular Esterilizado',
        category: 'food',
        seller: 'Royal Canin',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '55€',
    },
    {
        photo: "./assets/store/royal_canin_sterilised.jpg",
        name: 'Gato Adulto Esterilizado',
        category: 'food',
        seller: 'Royal Canin',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '60€',
    },
    {
        photo: "./assets/store/kitty_fish.jpg",
        name: 'Juguete pescado para gatitos',
        category: 'toys',
        seller: 'catmichi',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '10€',
    },
    {
        photo: "./assets/store/kitty_mouse.jpg",
        name: 'Juguete ratón para gatos',
        category: 'toys',
        seller: 'catmichi',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '15€',
    },
    {
        photo: "./assets/store/kitty_snake.jpg",
        name: 'Juguete serpiente colorida',
        category: 'toys',
        seller: 'catmichi',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '20€',
    },
    {
        photo: "./assets/store/tugatito_caña_de_colores.jpg",
        name: 'Juguete con caña para gatitos',
        category: 'toys',
        seller: 'tugatito',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '12€',
    },
    {
        photo: "./assets/store/tugatito_caña_plumas.jpg",
        name: 'Juguete con caña y plumas',
        category: 'toys',
        seller: 'tugatito',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '25€',
    },
];

// --------------------FILTRO DE LOS SELLER
const typeOfSeller = [];
        
console.log(typeOfSeller)
// -----------------------------------
const getTypeOfSeller = () => {
    for (let i = 0; i < products2.length; i++) {

        const typeSeller = products2[i];
        // console.log(newSeller)
        if (typeOfSeller.includes(typeSeller.seller)) {
            typeOfSeller.push();
        } else {
        typeOfSeller.push(typeSeller.seller)  
        }
    }
}


const getSeller = (typeOfSeller) => {
    return `<button>${typeOfSeller}</button>`
}

const setupSellerList = () => {
    const buttonSeller = document.querySelector('#filtros');
    getTypeOfSeller();
    console.log(typeOfSeller);
    for (let i = 0; typeOfSeller.length; i++) {
        const sellerElement = typeOfSeller[i]

        buttonSeller.innerHTML += getSeller(sellerElement)
    }
}

setupSellerList();

// const filter = document.querySelector('#filtros')

// const firshFilter = (seller) => {
//     return `
//         <button id="button-hills">${seller}</button>
//     `;
// };

// const getFilter = () => {
//     return `
//     <form id="request-form">

//     <h4>AQUÍ ESTÁ EL FILTRO!</h4>   

//     <label for="text">Selecciona un precio</label>
//         <input type="number" placeholder="Introduce un precio" name="number" id="price-search">
//         <button>ENVÍAR SOLICITUD</button>

//     <label for="select_seller">Filtra por marca</label>
//         <button id="button-hills">Hills</button>
//         <button type="button">Royal Canin</button>
//         <button type="button">Kitty</button>
//         <button type="button">Tugatito</button>

//     <label for="select_category">Filtra por el tipo:</label>
//         <select name="select" id="select_form">
//             <option value="initial">-</option>
//             <option value="toys">Toys</option>
//             <option value="food">Food</option>
//         </select>

//     <button type="button" id="search-button">REINICIAR FILTROS</button>

//     </form>`
// }

// const setupFilters = () => {
//     filter.innerHTML += getFilter();
// }



// console.log(document.querySelector('#filtros'))

// const onButtonClicked = (event) => {

// console.log(event.target)
     

// }


// const filterHills = document.querySelector('#button-hills')
// filterHills.addEventListener('click', onButtonClicked)


// setupFirshFilter();