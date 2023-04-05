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
    for (let i = 0; i < products.length; i++) {
        const productsElement = products[i];

            productsList.innerHTML += getProducts(productsElement);
    };

};



// Función para crear de manera dinámica las diferentes marcas y categorías de la lista!
const addOptionsToTypeOfPicker = () => {
    const sellerPickerSelect = document.querySelector('#option-picker');
    const categoryPickerSelect = document.querySelector('#option-category');
    
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


// Función para los filtros!
const setupFilter = () => {
    const sellerPickerSelect = document.querySelector('#option-picker');
    const mainList = document.querySelector('#products-list');
    
    const pricePickerInput = document.querySelector('#input-filter');
    const buttonInput = document.querySelector('#button-filter');


    const prueba1 = (event) => {
       
        const newSeller = event.target.value;

        mainList.innerHTML = `<h4>Consulta los productos a continuación:</h4>`;
       
       const arraySeller = [];

       if (newSeller === 'init') {
        mainList.innerHTML = '';
        // pricePickerInput.value = 0;
        setupProductsList();
       } else {

        // pricePickerInput.value = 0;
        products.forEach(element => {
        if (element.seller === newSeller) {
            mainList.innerHTML += getProducts(element);
            arraySeller.push(element)}
        })
       }

       if (pricePickerInput.value > 0) {
        console.log('El VALUE es mayor que 0')
        mainList.innerHTML = `<h4>Consulta los productos a continuación:</h4>`

            if (newSeller === 'init') {
                
                products.forEach(element => {
                    if (element.price <= pricePickerInput.value) {
                    mainList.innerHTML += getProducts(element)} 
                    });

            } else {
                const priceAndSeller = arraySeller.filter(element => element.price <= parseInt(pricePickerInput.value))
            
                if (priceAndSeller.length === 0) {
                    mainList.innerHTML = `<div class="no-information">
                        <h3>Lo siento, no hay ningún producto. Por favor, intenta con otro precio.</h3>
                        <img width=400px src="./assets/icon/cute-sad.gif" alt="">
                        </div>`  
                } else {
                    priceAndSeller.forEach(element => mainList.innerHTML += getProducts(element));
                }
            }
        
       }

        console.log('ESTO VALE:', pricePickerInput.value)
        // console.log(arraySeller)
    } 

    

    const prueba2 = (price, seller) => {
        mainList.innerHTML = '';

        console.log(price)

        for (let i = 0; i < products.length; i++) {
            const element = products[i];

            if (seller === 'init' && (element.price < price || price === '')){
                mainList.innerHTML += getProducts(element)
            } else {
                if ((element.price < price || price === '') && element.seller === seller) {
                    mainList.innerHTML += getProducts(element)
                }
            }
        }
    };

    buttonInput.addEventListener('click', (ev) => {
        // console.log('Este es el valor del input type number', pricePickerInput.value)
        // console.log('Esta es la marca', sellerPickerSelect.value)

        const numberInput = parseInt(pricePickerInput.value)

            mainList.innerHTML = `
            <h4>Consulta los productos a continuación:</h4>`;

            const arrayPriceAndSeller = [];
            const arrayPrice = []
        
            if (sellerPickerSelect.value === 'init'){

                products.forEach(element => {
                    if (element.price <= numberInput) {
                    mainList.innerHTML += getProducts(element)
                    arrayPrice.push(element)} 
                    });

                if (arrayPrice.length === 0) {
                    mainList.innerHTML = `<div class="no-information">
                    <h3>Lo siento, no hay ningún producto. Por favor, intenta con otro precio.</h3>
                    <img width=400px src="./assets/icon/cute-sad.gif" alt="">
                    </div>`  
                }

            } else {
                    products.forEach(element => {
                        if (element.seller === sellerPickerSelect.value) {
                        arrayPriceAndSeller.push(element)}
                    })
            }

            console.log(arrayPrice)


        if(arrayPriceAndSeller.length === 0) {
            console.log('Mi primer array es vacío')
        } else {
            console.log('estoy en está condición')
            const priceAndSeller = arrayPriceAndSeller.filter(element => element.price <= numberInput)
            
            if (priceAndSeller.length === 0) {
                mainList.innerHTML = `<div class="no-information">
                    <h3>Lo siento, no hay ningún producto. Por favor, intenta con otro precio.</h3>
                    <img width=400px src="./assets/icon/cute-sad.gif" alt="">
                    </div>`  
            } else {
                priceAndSeller.forEach(element => mainList.innerHTML += getProducts(element));
            }
            
        }

        
        
        


        // console.log(typeof pricePickerInput.value)
        // console.log(typeof arrayPriceAndSeller[0].price)
        
        
        // Encuentro los productos que cumplan con la condición y los guardo en newArray!
        

        // console.log('ESTO ESTÁ APARECIENDO?', newArray)
        
        // if (newArray.length === 0) {
        //     mainList.innerHTML = `<div class="no-information">
        //      <h3>Lo siento, no hay ningún producto. Por favor, intenta con otro precio.</h3>
        //      <img width=400px src="./assets/icon/cute-sad.gif" alt="">
        //      </div>`  
        // }

        // // Ordeno mi nuevo array filtrado para que me aparezcan de menor a mayor!
        // const orderNewArray = newArray.sort((productA, productB) => productB.price < productA.price ? 1 : -1)
        
        // orderNewArray.forEach(element => {
        //     mainList.innerHTML += getProducts (element)
        // })
                    
    })

    sellerPickerSelect.addEventListener('change', prueba1)

    // const handleForm = (event) => {
    //     const formElements = event.target;
    //     console.log(formElements);
    //     prueba2(formElements.price.value, formElements.sellers.value);
    // }

    
    
    // buttonInput.addEventListener('submit', handleForm)
        // console.log(pruebaSeller)


    // buttonInput.addEventListener('click', (ev) => {

        

    //     console.log('Esto tiene valor', newPrice)

    //     mainList.innerHTML = `
    //         <h4>Consulta los productos a continuación:</h4>`;
            
    //         sellerPickerSelect.value = 'init'
            
    //         // Encuentro los productos que cumplan con la condición y los guardo en newArray!
    //         products.forEach(element => {
    //             if (element.price <= pricePickerInput.value) {
    //                 if(!newArray.includes(element)) {
    //                     newArray.push(element)
    //                 }
                    
    //             } 
    //         });
    
    //         console.log('Le estoy dando click')
            
    //         if (newArray.length === 0) {
    //             mainList.innerHTML = `<div class="no-information">
    //              <h3>Lo siento, no hay ningún producto. Por favor, intenta con otro precio.</h3>
    //              <img width=400px src="./assets/icon/cute-sad.gif" alt="">
    //              </div>`  
    //         }
    
    //         // Ordeno mi nuevo array filtrado para que me aparezcan de menor a mayor!
    //         const orderNewArray = newArray.sort((productA, productB) => productB.price < productA.price ? 1 : -1)
            
    //         orderNewArray.forEach(element => {
    //             mainList.innerHTML += getProducts (element)
    //         })
                        
    //     })



            // const searchByBrand = (event) => {
            //     containerParfum.innerHTML = '';
            //     if (event.target.value === 'ALL') {
            //         printParfums();
            //     } else {
            //         for (let i = 0; i < parfums.length; i++) {
            //             const elementParfum = parfums[i];
            //             if (elementParfum.brand === event.target.value) {
            //                 containerParfum.innerHTML += productTemplate(elementParfum);
            //             }
            //         }
            //     }
            
            
            // }  
            
            
        // if (newArray.length > 0) {
            
        //     console.log('esto se está mostrando')

        //     mainList.innerHTML = `
        //     <h4>Consulta los productos a continuación:</h4>`;

        //     for (let i = 0; i < newArray.length; i++) {
        //         const productFilterUnidos = newArray[i];

        //         if (productFilterUnidos.seller === newSeller){

        //             mainList.innerHTML += getProducts (
        //                 productFilterUnidos.photo,
        //                 productFilterUnidos.name,
        //                 productFilterUnidos.category,
        //                 productFilterUnidos.seller,
        //                 productFilterUnidos.desc,
        //                 productFilterUnidos.price,
        //             )
        //         } 
        //     }


        // } else {
        //         mainList.innerHTML = `
        //     <h4>Consulta los productos a continuación:</h4>`;

        //     if (newSeller === 'init') {
        //         setupProductsList();
        //     }

        //     for (let i = 0; i < products.length; i++) {
        //         const productFilter = products[i];

        //         if (productFilter.seller === newSeller){

        //             mainList.innerHTML += getProducts (
        //                 productFilter.photo,
        //                 productFilter.name,
        //                 productFilter.category,
        //                 productFilter.seller,
        //                 productFilter.desc,
        //                 productFilter.price,
        //             )
        //         } 
        //     }
        // }

        // console.log(newArray)
        
    

  

    // const filterList = document.querySelector('#filtros');

    // Información del filtro por precio!
    // buttonInput.addEventListener('click', (ev) => {

    //     mainList.innerHTML = `
    //     <h4>Consulta los productos a continuación:</h4>`;
        
    //     sellerPickerSelect.value = 'init'
        

    //     // Encuentro los productos que cumplan con la condición y los guardo en newArray!
    //     products.forEach(element => {
    //         if (element.price <= pricePickerInput.value) {
    //             if(!newArray.includes(element)) {
    //                 newArray.push(element)
    //             }
                
    //         } 
    //     });

    //     console.log('ESTO ESTÁ APARECIENDO?', newArray)
        
    //     if (newArray.length === 0) {
    //         mainList.innerHTML = `<div class="no-information">
    //          <h3>Lo siento, no hay ningún producto. Por favor, intenta con otro precio.</h3>
    //          <img width=400px src="./assets/icon/cute-sad.gif" alt="">
    //          </div>`  
    //     }

    //     // Ordeno mi nuevo array filtrado para que me aparezcan de menor a mayor!
    //     const orderNewArray = newArray.sort((productA, productB) => productB.price < productA.price ? 1 : -1)
        
    //     orderNewArray.forEach(element => {
    //         mainList.innerHTML += getProducts (element)
    //     })
                    
    // })

    
   
}


// Botón para resetear los filtros!
    
resetProducts.addEventListener('click', (ev) => {

    console.log('me estas clicando!')
    mainList.innerHTML = '';
    setupProductsList();
    sellerPickerSelect.value = 'init';
    pricePickerInput.value = 0;

})


addOptionsToTypeOfPicker();
// addOptionsToCategory();
window.addEventListener('load', setupProductsList());
window.addEventListener('load', setupFilter());
