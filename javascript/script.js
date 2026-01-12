
const menuCategories = document.querySelectorAll(".category-section");

//Obtem todos os elementos do tipo "<a href="#doces-section">DOCES</a>" e armazena em um array.
const menuLinks = document.querySelectorAll( ".main-menu a");

/* Adiciona um EventListener que responde ao click e todas as categorias do menu. Quando o usuário click em alguma categoria,
esta função remove as propriedades "active-category" e "category-visible" de todas as categorias, e por fim ativa as
propriedades anteriores na categoria selecionada pelo usuário */
menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        //Dentro do elemento do tipo "<a href="#doces-section">DOCES</a>" busca o que esta em href, no exemplo #doces-section.
        const currentId = link.getAttribute('href');

        /*Proocura no HTML uma seção com  ID de  mesmo nome que a variavel de currentID.
        No exemplo, ele procura um elemento que tenha o ID = doces-section */
        const targetSection = document.querySelector(currentId);

        /*Busca todos os elementos com a propriedade .category-visible e remove essa propriedade. */
        const visibleCategories = document.querySelectorAll(".category-visible");
        visibleCategories.forEach( (category) => {
            category.classList.remove('category-visible')

        }) ;

        /*Busca e remove todos os elementos do HTML com a propriedade "active-category.*/
        const activeCategories = document.querySelectorAll(".active-category")
        activeCategories.forEach((category) => {
            category.classList.remove("active-category");

        });

        //Por fim, ativa a seção clicada pelo usuário.
        if( targetSection != null) {
            targetSection.classList.add('category-visible');
            link.classList.add('active-category');
        };

    });
});


/*================================================
 CONTROLE DA QUANTIDADE SELECIONADA PELO USUÁRIO
================================================ */

const decreaseQuantityButtons = document.querySelectorAll(".decrease-quantity");
const increaseQuantityButtons = document.querySelectorAll(".increase-quantity");
const quantityInputs = document.querySelectorAll('.quantity-value');

quantityInputs.forEach((input) => {
    input.addEventListener('input', () => {
    
        /*Permite somente numeros*/
        let currentValue = input.value;
        const onlyNumbers = currentValue.replace(/\D/g, '');
        input.value = onlyNumbers

        if( onlyNumbers === '') {return};

        var inputNumber = Number(onlyNumbers);

        if(inputNumber > 999){
            input.value = 999;
        }
    
    });
});

quantityInputs.forEach((input) => {
    input.addEventListener('blur', () => {
    
    let valorAtual = Number(input.value.trim());
    const min = Number(input.min);
    
    // Se o campo estiver vazio ou for menor que o mínimo, corrija
    if (input.value.trim() === '' || valorAtual < min) {
        // Corrigir para o mínimo
        input.value = min;
        
    // (Opcional) Corrigir NaN (se o usuário digitar '-' ou '.' e sair)
    } else if (isNaN(valorAtual)) {
        input.value = min; 
    }
    
    });
});

decreaseQuantityButtons.forEach((button) => {
    button.addEventListener( 'click', (event) => {

        const quantitySelector = button.parentElement;

        const quantityValue = quantitySelector.querySelector('.quantity-value');

        if(quantityValue){

            var value = Number(quantityValue.value);

            if( value > Number(quantityValue.min)){
                value--;

                quantityValue.value = value;

            };
        };
    });
});

increaseQuantityButtons.forEach((button) => {
    button.addEventListener('click', (event) => {

        const quantitySelector = button.parentElement;

        const quantityValue = quantitySelector.querySelector('.quantity-value');

        if(quantityValue){

            var value = Number(quantityValue.value);

            if( value < 999){
                value++;

                quantityValue.value = value;

            };
        };
        

    });
});

/*=================================================*/

const flavorSelectorContainers = document.querySelectorAll('.card-flavor-selector-container');
flavorSelectorContainers.forEach((flavorContainer) => {
    
    /*Busca o elemento pai*/
    const parent = flavorContainer.closest('.product-card');
    const productType = parent.getAttribute('data-interaction');

    const product = findProductByID(menu, parent.getAttribute('id'));

    /* Busca o primeiro select*/
    const selects = flavorContainer.querySelectorAll('select');

    selects.forEach( (select) => {
        select.addEventListener('change' , (event) => {

            const index = (event.target.selectedIndex) - 1;
        
            switch(productType){
                case "priceByFlavor-doubleSize":
                    showFlavorInfo(parent, index);
                    enablePriceMeasure(parent,index,product);
                    break;

                case  "priceByFlavor-staticSize":
                    showFlavorInfo(parent, index);
                    enablePriceMeasure(parent,index,product);
                    break;

                case "simpleSizeAndPrice-doubleFlavor":
                    
                    const dropdown = flavorContainer.querySelectorAll('select');

                    const select01 = dropdown[0];
                    const select02 = dropdown[1];

                    if(select01.value && select02.value){
                        enableActionsContainer(parent);
                    }

                    break;

                default:
                    showFlavorInfo(parent,index);
                    enableActionsContainer(parent);

            }

        });
    });
});



const sizeSelectorContainers = document.querySelectorAll('.card-size-options-selector-container');
sizeSelectorContainers.forEach((sizeContainer) => {

    /*Busca o select*/
    const select = sizeContainer.querySelector('select');

    const parent = sizeContainer.closest('.product-card');

    const product = findProductByID(menu, parent.getAttribute('id'));

    const productType = parent.getAttribute('data-interaction');

    let flavorIndex;

    sizeContainer.addEventListener('change', (event) => {

        flavorIndex = (event.target.selectedIndex) - 1;

        switch(productType){

            case "staticStyleAndPrice-multSize":

                enableAddToCartButton(parent);

                showWeightInfo(parent,flavorIndex,product);

                break;

            case "staticPrice-multStyle-multSize":
                
                enableAddToCartButton(parent);

                showWeightInfo(parent,flavorIndex,product);
                
                break;

            case "priceByExtra-multStyle-multSize":

                
            default:
        }
    })
});



/*Busca todos os botões de adicionar ao carrinhos */
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

/*Cria o array que guarda os produtos escolhidos*/
let purchasedProducts;

addToCartButtons.forEach( (button) => {

    button.addEventListener('click', (event) => {

        const parent = button.closest('.product-card');

        const productID = parent.getAttribute('id');

        const product = findProductByID(menu, productID);

        console.log(generateSignature(parent,product,productID));

    });
});

reactToButtonInteraction('.card-style-selector-container', '.style-button');
reactToButtonInteraction('.card-size-selector-container', '.size-button');

/*=============================
        CARD RENDER
=============================*/
/*Função responsável por transferir as informações de product.js para o HTML, os dados dos produtos estão salvos no
array "menu" no arquivo "product.js".*/

menu.forEach( (product) => {
    /*Procura o ID do product atual no HTML, o ID é um campo do produto "product.id".*/
    const cardElement = document.getElementById(product.id);

    if(cardElement){
        switch(product.type){
            case "staticPriceAndSize":
                injectProductDefaultImage(cardElement, product);

                injectProductName(cardElement, product);
               
                injectProductPrice(cardElement, product);

                injectProductDescription(cardElement, product);

                injectProductQuantityLabel(cardElement, product);

                enableActionsContainer(cardElement);

                break;
            
            case "priceBySize-simpleFlavor":
                injectProductDefaultImage(cardElement, product);

                injectProductName(cardElement, product);

                injectProductQuantityLabel(cardElement, product);
                
                injectProductSizeButtonLabel( cardElement,product);

                break;
            
            case "priceBySize-multFlavor":
                injectProductDefaultImage(cardElement,product);

                injectProductName(cardElement, product);

                injectProductQuantityLabel( cardElement, product);
            
                injectProductSizeButtonLabel(cardElement, product)

                injectProductFlavorOptions(cardElement, product);

                break;

            case "simpleFlavorAndSize":
                injectProductDefaultImage(cardElement,product);

                injectProductName(cardElement, product);

                injectProductPrice(cardElement, product);

                injectProductDescription(cardElement, product);

                injectProductFlavorOptions(cardElement,product);

                injectProductQuantityLabel(cardElement,product);
                break;

            case "priceByFlavor-staticSize":
                injectProductDefaultImage(cardElement,product);

                injectProductName(cardElement,product);

                injectProductDescription(cardElement,product);

                injectProductFlavorOptions(cardElement, product);

                injectProductQuantityLabel(cardElement,product);

                break;

            case "simpleSizeAndPrice-doubleFlavor":
                injectProductDefaultImage(cardElement,product);

                injectProductName(cardElement,product);

                injectProductPrice(cardElement,product);

                injectProductDescription(cardElement,product);

                injectProductFlavorOptions(cardElement,product);

                break;

            case "priceByFlavor-doubleSize":
                injectProductDefaultImage(cardElement,product);

                injectProductName(cardElement,product);

                injectProductSizeButtonLabel(cardElement,product);

                injectProductFlavorOptions(cardElement,product);
            
                break;

            case "staticStyleAndPrice-multSize":
                injectProductDefaultImage(cardElement,product);

                injectProductName(cardElement,product);

                injectProductDescription(cardElement, product);

                injectProductSizeOptions(cardElement,product);

                injectProductPrice(cardElement,product);
                
                break;

            case "staticPrice-multStyle-multSize":
                injectProductDefaultImage(cardElement,product);

                injectProductName(cardElement,product);

                injectProductPrice(cardElement,product);

                injectProductDescription(cardElement,product);

                injectProductStyleButtonLabel(cardElement,product);

                injectProductSizeOptions(cardElement,product);

                break;

            case "priceByExtra-multStyle-multSize":
                injectProductDefaultImage(cardElement,product);

                injectProductName(cardElement, product);

                injectProductStyleButtonLabel(cardElement,product);

                injectProductDescription(cardElement,product);

                injectProductSizeOptions(cardElement,product);

            break;
            
            case "staticPriceAndSize-multFlavor":
                    injectProductDefaultImage(cardElement,product);
                    
                    injectProductName(cardElement,product);

                    injectProductPrice(cardElement,product);

                    injectProductDescription(cardElement,product);

                    injectProductFlavorOptions(cardElement,product);
            
                break;

        }
    };
});

