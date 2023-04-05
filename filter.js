const setupFilter = () => {
    const sellerPickerSelect = document.querySelector('#option-picker');
    const mainList = document.querySelector('#products-list');
    const resetProducts = document.querySelector('#botton-reset');

    const pricePickerInput = document.querySelector('#input-filter');
    const buttonInput = document.querySelector('#buton-filter');

    const newArray = [];

    sellerPickerSelect.addEventListener('change', (ev) => {
        const newSeller = ev.target.value;

        if (newArray.length > 0) {
            
            console.log('esto se está mostrando')

            mainList.innerHTML = `
            <h4>Consulta los productos a continuación:</h4>`;

            for (let i = 0; i < newArray.length; i++) {
                const productFilterUnidos = newArray[i];

                if (productFilterUnidos.seller === newSeller){

                    mainList.innerHTML += getProducts (
                        productFilterUnidos.photo,
                        productFilterUnidos.name,
                        productFilterUnidos.category,
                        productFilterUnidos.seller,
                        productFilterUnidos.desc,
                        productFilterUnidos.price,
                    )
                } 
            }

        } else {
                mainList.innerHTML = `
            <h4>Consulta los productos a continuación:</h4>`;

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
        }

        console.log(newArray)
        
    })

}