// const products = [
//     {
//     name: 'opcional',
//     price: 'OBLIGATORIO',
//     stars: 'opcional',
//     reviews: 'opcional', 
//     seller: 'OBLIGATORIO, indicar de donde salen los productos',
//     image: 'opcional pero necesario', 
//     }
// ]

const products = [
    {
        photo: "./assets/store/hills_sterilised_cat.jpg",
        name: 'Gato Adulto Esterilizado',
        category: 'food',
        seller: 'Hills',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 20,
    },
    {
        photo: "./assets/store/hills_metabolic.jpg",
        name: 'Gato Adulto Metabolic',
        category: 'food',
        seller: 'Hills',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 30,
    },
    {
        photo: "./assets/store/hills_kitten.jpg",
        name: 'Gato cachorro',
        category: 'food',
        seller: 'Hills',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 40,
    },
    {
        photo: "./assets/store/royal_canin_digestive.jpg",
        name: 'Gato Adulto Digestivo',
        category: 'food',
        seller: 'Royal Canin',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 50,
    },
    {
        photo: "./assets/store/royal_canin_regular_sterilised.jpg",
        name: 'Gato Adulto Regular Esterilizado',
        category: 'food',
        seller: 'Royal Canin',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 55,
    },
    {
        photo: "./assets/store/royal_canin_sterilised.jpg",
        name: 'Gato Adulto Esterilizado',
        category: 'food',
        seller: 'Royal Canin',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 60,
    },
    {
        photo: "./assets/store/kitty_fish.jpg",
        name: 'Juguete pescado para gatitos',
        category: 'Toys',
        seller: 'Catmichi',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 10,
    },
    {
        photo: "./assets/store/kitty_mouse.jpg",
        name: 'Juguete ratón para gatos',
        category: 'Toys',
        seller: 'Catmichi',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 15,
    },
    {
        photo: "./assets/store/kitty_snake.jpg",
        name: 'Juguete serpiente colorida',
        category: 'Toys',
        seller: 'Catmichi',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 20,
    },
    {
        photo: "./assets/store/tugatito_caña_de_colores.jpg",
        name: 'Juguete con caña para gatitos',
        category: 'Toys',
        seller: 'Tugatito',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 12,
    },
    {
        photo: "./assets/store/tugatito_caña_plumas.jpg",
        name: 'Juguete con caña y plumas',
        category: 'Toys',
        seller: 'Tugatito',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 25,
    },
];

// products = [ photo, name, category, seller, desc, price ]

const getProducts = (photo, name, category, seller, desc, price) => {
    return `
        <div class="container-gallery">
            <img src=${photo} alt=${name} />

            <div class="info-container">
                <h4>Nombre: ${name}</h4>
                <h4>Tipo: ${category}</h4>
                <h4>Marca: ${seller}</h4>
                <p>Descripción: ${desc}</p>
                <h4>${price}€</h4>
            </div>
        </div>
        `;

};

const setupProductsList = () => {
    const productsList = document.querySelector('#products-list');    
    for (let i = 0; i < products.length; i++) {
        const productsElement = products[i];

            productsList.innerHTML += getProducts (
                productsElement.photo,
                productsElement.name,
                productsElement.category,
                productsElement.seller,
                productsElement.desc,
                productsElement.price,
        );
    };

};

const addOptionsToColorPicker = () => {
    const sellerPickerSelect = document.querySelector('#option-picker');
    
    const typeOfSeller = () => {
        const optionTypeOfSeller = [];

            for (let i = 0; i < products.length; i++) {
                const typeSeller = products[i].seller;
                
                if (!optionTypeOfSeller.includes(typeSeller)){
                    optionTypeOfSeller.push(typeSeller);
                }
            };

            for (let i = 0; i < optionTypeOfSeller.length; i++) {
                const option = document.createElement('option');
            
                option.innerText = optionTypeOfSeller[i];

                sellerPickerSelect.append(option)
            }
    };

typeOfSeller();
}

const setupFilter = () => {
    const sellerPickerSelect = document.querySelector('#option-picker');
    const mainList = document.querySelector('#products-list');
    const resetProducts = document.querySelector('#botton-reset');

    const pricePickerInput = document.querySelector('#input-filter');
    const buttonInput = document.querySelector('#buton-filter');
 
    sellerPickerSelect.addEventListener('change', (ev) => {
        const newSeller = ev.target.value;

        mainList.innerHTML = '';

        if (newSeller === 'init') {
            setupProductsList();
        }

        for (let i = 0; i < products.length; i++) {
            const productFilter = products[i];

            if (productFilter.seller === newSeller){

                mainList.innerHTML += getProducts (
                    productFilter.photo,
                    productFilter.name,
                    productFilter.category,
                    productFilter.seller,
                    productFilter.desc,
                    productFilter.price,
                )
            } 
        }
        
    })

    // const filterList = document.querySelector('#filtros');

    // Información del filtro por precio!
    buttonInput.addEventListener('click', (ev) => {

        mainList.innerHTML = '';
        const newArray = [];
        
        // Encuentro los productos que cumplan con la condición y los guardo en newArray!
        
        products.forEach(element => {
            if (element.price <= pricePickerInput.value) {
                newArray.push(element)
            } 
        });

        console.log(newArray.length)
        console.log(pricePickerInput.value)
        
        if (newArray.length === 0) {
            console.log('que pasa aquí?')
            mainList.innerHTML = `<div class="no-information">
             <h3>Lo siento, no hay ninguno. Intenta con otro número</h3>
             <img width=500px src="./assets/icon/cute-sad.gif" alt="">
             </div>`
             
        }

        // Ordeno mi nuevo array filtrado para que me aparezcan de menor a mayor!
        const orderNewArray = newArray.sort((productA, productB) => productB.price < productA.price ? 1 : -1)
        
        orderNewArray.forEach(element => {
            mainList.innerHTML += getProducts (
                element.photo,
                element.name,
                element.category,
                element.seller,
                element.desc,
                element.price,
            )
        })
            
        // if (newArray = '') {
            
        // }        
        
    })

    // Botón para resetear los filtros!
    resetProducts.addEventListener('click', (ev) => {
        mainList.innerHTML = '';
        setupProductsList();
        sellerPickerSelect.value = 'init';

    })
    
}

addOptionsToColorPicker();
window.addEventListener('load', setupProductsList());
window.addEventListener('load', setupFilter());
