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

const mainList = document.querySelector('#products-list');
const resetProducts = document.querySelector('#botton-reset');
const sellerPickerSelect = document.querySelector('#option-picker');
const buttonInput = document.querySelector('#button-filter');
const pricePickerInput = document.querySelector('#input-filter');

// products = [ photo, name, category, seller, desc, price ]
const getProducts = (product) => {
    return `
        <div class="container-gallery">
            <img src=${product.photo} alt=${product.name} />

            <div class="info-container">
                <h4>Nombre: ${product.name}</h4>
                <h4>Tipo: ${product.category}</h4>
                <h4>Marca: ${product.seller}</h4>
                <p>Descripción: ${product.desc}</p>
                <h4>${product.price}€</h4>
            </div>
        </div>
    `;

};

// Pintar el listado de los productos en el HTML
const setupProductsList = () => {
    const productsList = document.querySelector('#products-list');
    
    for (const product of products) {
        productsList.innerHTML += getProducts(product)
    }

};

// Función para crear de manera dinámica las diferentes marcas y categorías de la lista!
const addOptionsToTypeOfPicker = () => {
    const sellerPickerSelect = document.querySelector('#option-picker');
    const categoryPickerSelect = document.querySelector('#option-category');
    
    //Creo mis dos arrays para tener mis dos filtros por categoría o marca.
    const typeOfSellerAndCategory = () => {
        const optionTypeOfSeller = [];
        const optionTypeOfCategory = [];

        // En una sola función for, recorro el array de products para sacar la información que necesito en mis filtros!
            for (let i = 0; i < products.length; i++) {
                const typeSeller = products[i].seller;
                const typeCategory = products[i].category;

                if (!optionTypeOfSeller.includes(typeSeller)){
                    optionTypeOfSeller.push(typeSeller);
                } else if (!optionTypeOfCategory.includes(typeCategory)){
                    optionTypeOfCategory.push(typeCategory)
                };
            };

            // Con el bucle forEach, recorro mis nuevos arrays con las marcas y categorías, para crear las opciones disponibles!
            optionTypeOfSeller.forEach(element => {
                const optionSeller = document.createElement('option');
                optionSeller.innerText = element;
                sellerPickerSelect.append(optionSeller)
            });

            optionTypeOfCategory.forEach(element => {
                const optionCategory = document.createElement('option');
                optionCategory.innerText = element;
                categoryPickerSelect.append(optionCategory)
            })

    };

// Una vez que he terminado de crear mis opciones, invoco la función para que aparezca correctamente en mi HTML
typeOfSellerAndCategory();
};

// _____________________________________________________________________________________________________________________

// Diferentes filtros:

// Función para filtrar por el tipo de marca:
const filterBySeller = (typeOfSeller, newArraySeller) => {

    // Se recorre el array original por la clave seller y es creado un nuevo array con esos productos.
    products.forEach(product => {
        if (product.seller === typeOfSeller) {
            mainList.innerHTML += getProducts(product);
            newArraySeller.push(product)}
        })
}

// Función para filtrar por el precio:
const filterByPrice = (findPrice, newArrayPrice) => {

// Se recorre el array original por la clave price y es creado un nuevo array con esos productos.
    products.forEach(product => {
        if (product.price <= findPrice) {
        mainList.innerHTML += getProducts(product);
        newArrayPrice.push(product)} 
        });
}

// Sino existe el producto que se está buscando, invoco a esta función:
const productNotFound = () => {
    mainList.innerHTML = `<div class="no-information">
    <h3>Lo siento, no hay ningún producto. Por favor, intenta con otro precio.</h3>
    <img width=400px src="./assets/icon/cute-sad.gif" alt="">
    </div>`  
}

// Función que filtra cada vez que se cambia el valor en el select por la marca:
const changeSellerAndPrice = (event) => {
       
    const valueSeller = event.target.value;
    const valuePrice = parseInt(pricePickerInput.value);
    mainList.innerHTML = `<h4>Consulta los productos a continuación:</h4>`;
       
    const arraySeller = [];
    const arrayPrice = [];

    // En caso de que se cumpla mi condición inicial del select por marca:
    valueSeller === 'init' ? mainList.innerHTML = '' && setupProductsList() : filterBySeller(valueSeller, arraySeller);

    // En caso de que se busque un valor mayor a cero en mi input:
    if (valuePrice > 0) {
        console.log('El VALUE es mayor que 0')
        mainList.innerHTML = `<h4>Consulta los productos a continuación:</h4>`

        if (valueSeller === 'init') {
            // La condición es que mi input sea mayor a cero, y además que mi select esté en el valor inicial:
            filterByPrice(valuePrice, arrayPrice);

        } else {
            // En caso de que mi input sea mayor a cero y además, tenga una marca seleccionada, se filtra los productos por el valor del input:
            const arrayPriceAndSeller = arraySeller.filter(product => product.price <= parseInt(valuePrice));
            // Una vez filtrados, reviso si tengo algún producto para poder mostrarlos en el HTML, en caso contrario, invocó mi función productNotFound:
            arrayPriceAndSeller.length === 0 ? productNotFound() : arrayPriceAndSeller.forEach(product => mainList.innerHTML += getProducts(product));
        }
    }
} 

// Función que filtra cada vez que le doy click al botón de buscar:
const clickSellerAndPrice = (event) => {

    const valuePrice = parseInt(pricePickerInput.value);
    const valueSeller = sellerPickerSelect.value

    mainList.innerHTML = `<h4>Consulta los productos a continuación:</h4>`;

    const arrayPriceAndSeller = [];
    const arrayPrice = [];

    // Reviso si mi condición del select tiene alguna marca, si es igual a 'init', invoco a mi función de filtrar por el precio:
    if (valueSeller === 'init'){
        filterByPrice(valuePrice, arrayPrice);

        // Si mi select está en el inicial, pero además no hay ningún producto que sea menor al precio que tengo en mi input, invoco mi función de productNotFound:
        if (arrayPrice.length === 0) {
            productNotFound();
        }

    } else {
        
        // Si el select tiene alguna marca, voy a crear un nuevo array, pero no lo voy a 'pintar' en mi HTML hasta que lo necesite.
        products.forEach(element => {
            if (element.seller === valueSeller) {
                arrayPriceAndSeller.push(element)}
            })
    }

    // Si mi array creado a partir del if anterior existe (que está creado únicamente por las marcas), entro en esta condición:
    if (arrayPriceAndSeller.length !== 0) {
  
        // Se creará un nuevo array, filtrando por los precios que estén por debajo de mi valor en el input.
        const priceAndSeller = arrayPriceAndSeller.filter(element => element.price <= valuePrice)
        
        // Si al filtrar ese nuevo array, no existe ningún producto que cumpla con la condición del input mostraré la función productNotFound.
        // En caso contrario, mostraré los elementos que cumplan la condición en mi HTML.
        priceAndSeller.length === 0 ? productNotFound() : priceAndSeller.forEach(product => mainList.innerHTML += getProducts(product));
    }

}


// Botón para resetear los filtros!
resetProducts.addEventListener('click', (ev) => {

    console.log('me estas clicando!')
    mainList.innerHTML = '';
    setupProductsList();
    sellerPickerSelect.value = 'init';
    pricePickerInput.value = `Introduce aquí el precio`;

})

// Funciones iniciales para que se muestre en mi HTML:
addOptionsToTypeOfPicker();
window.addEventListener('load', setupProductsList());

// Funciones para que se ejecute mis filtros:
buttonInput.addEventListener('click', clickSellerAndPrice)
sellerPickerSelect.addEventListener('change', changeSellerAndPrice)

buttonOrden()


