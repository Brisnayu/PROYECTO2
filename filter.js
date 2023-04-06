products.forEach(element => {
    if (element.price <= pricePickerInput.value) {
    mainList.innerHTML += getProducts(element)} 
    });

    
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

        // Función para los filtros!
const setupFilter = () => {

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
            console.log('estoy en el cambio tipo CLICK')
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

                    
    })

}