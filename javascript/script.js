
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


//DESENVOLVER!
const decreaseQuantityButtons = document.querySelectorAll(".decrease-quantity");

const increaseQuantityButtons = document.querySelectorAll(".increase-quantity");


decreaseQuantityButtons.forEach((button) => {
    button.addEventListener( 'click', (evet) => {

        const currentParent = button.parentElement;

        const currentQuantitySelector = currentParent.querySelector( ".quantity-value");

    });


});

increaseQuantityButtons.forEach((button) => {
    button.addEventListener('click', (evet) => {
        //Busca o elemento pai do botão atual, nesse caso é o quantity-selector
        const currentParent = button.parentElement;

        //Busca a div .quantity-selector para obter o campo onde a quantidade selecionada esta.
        const currentQuantitySelector = currentParent.querySelector(".quantity-value")

        //Busca o elemento que contem a classe .product-card mais próxima.
        const closestProduct = button.closest('.product-card');
    });
});



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
               
                injectProductMeasureUnit(cardElement, product);

                injectProductPrice(cardElement, product);

                injectProductDescription(cardElement, product);

                injectProductQuantityLabel(cardElement, product);

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

                injectProductMeasureUnit(cardElement,product);

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

                injectProductMeasureUnit(cardElement,product);

                injectProductDescription(cardElement,product);

                injectProductFlavorOptions(cardElement,product);

                break;

            case "priceByFlavor-doubleSize":
                injectProductDefaultImage(cardElement,product);

                injectProductName(cardElement,product);

                injectProductSizeButtonLabel(cardElement,product);
            
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

                injectProductMeasureUnit(cardElement,product);

                injectProductDescription(cardElement,product);

                injectProductStyleButtonLabel(cardElement,product);

                injectProductSizeOptions(cardElement,product);

                break;

            case "priceByExtra-multStyle-multSize":
                injectProductDefaultImage(cardElement,product);

                injectProductName(cardElement, product);

                injectProductDescription(cardElement,product);

                injectProductStyleButtonLabel(cardElement,product);
                
                injectProductSizeOptions(cardElement,product);

            break;
            
            case "staticPriceAndSize-multFlavor":
                    injectProductDefaultImage(cardElement,product);
                    
                    injectProductName(cardElement,product);

                    injectProductMeasureUnit(cardElement,product);

                    injectProductPrice(cardElement,product);

                    injectProductDescription(cardElement,product);

                    injectProductFlavorOptions(cardElement,product);
            
                break;

        }
    };
});

reactToButtonInteraction('.card-style-selector-container', '.style-button' );
reactToButtonInteraction('.card-size-selector-container', '.size-button');


function reactToButtonInteraction(classContainerName, ClassButtonName){

    const containerList = document.querySelectorAll(classContainerName);

    containerList.forEach( (currentClass) => {

        const buttonList = currentClass.querySelectorAll(ClassButtonName);

        buttonList.forEach((button) => {
            button.addEventListener('click', (event) => {
                colorClickedButton( button,currentClass,ClassButtonName);

                const parent = currentClass.parentElement;
                
                const currentType = parent.getAttribute('data-interaction');

                switch(currentType) {
                    case "priceBySize-simpleFlavor":

                        const index = button.getAttribute('data-size-index');
                        const productName = parent.getAttribute('id');
                        const product = menu.find( item => item.id === productName);

                        const priceMeasure = parent.querySelector('.price-measure');
                        
                        var temp = priceMeasure.querySelector('.product-price');
                        if( typeof product.sizes[index].displayPrice === 'string'){
                            temp.innerText = product.sizes[index].displayPrice;

                        }else{
                            temp.innerText = `R$ ${product.sizes[index].displayPrice.toFixed(2)}`;

                            temp = priceMeasure.querySelector('.product-measure');
                            temp.innerText = product.measureUnit;

                        };

                        const cardInfoRow = parent.querySelector('.card-info-row.weight-info');
                        cardInfoRow.classList.add('is-open');

                        temp = cardInfoRow.querySelector('.product-info');
                        temp.innerText = product.sizes[index].weightDescription;

                        

                        




                    break;

                };

                    

                    
            


                
              /*  if( classContainerName === '.card-style-selector-container' && ClassButtonName === '.style-button'){

                
                    const parentElement = currentClass.parentElement;
                    
                    const sizeOptionsContainer = parentElement.querySelector('.card-size-options-selector-container');

                    if(sizeOptionsContainer){
                        sizeOptionsContainer.classList.add('is-open');
                    };
                    
                    
                }else if(classContainerName === '.card-size-selector-container' && ClassButtonName === '.size-button'){


                }; */
            });
        });
    });

};







/*=============================================
            FUNÇÕES AUXILIARES 
=============================================*/

function colorClickedButton(currentButton, buttonContainer, ClassButtonName){

    /*Par de botões que estão dentro de ".card-style-selector-container".*/
    buttonPair = buttonContainer.querySelectorAll(ClassButtonName);

    /*Remove o "button-select" de todos os botões, inclusive o atual.*/
    buttonPair.forEach((button) => {
        if(button.classList.contains('button-selected')){
            button.classList.remove('button-selected');

        };

    });
        
    /*Adicione o efeito clicado*/
    currentButton.classList.add('button-selected');
}



function injectProductQuantityLabel(cardElement,product){
    const cardQuantityLabel = cardElement.querySelector( '.card-actions-container .quantity-selector .quantity-value');            
    if(cardQuantityLabel){
        // Verifica se o campo minQuantity existe no product, se sim, usa ele como valor, se não usa a quantidade mínima padrão minQuantidy.
        const finalQuantity = product.minQuantity || minQuantity;
        cardQuantityLabel.innerText = finalQuantity;
    };
}



function injectProductDefaultImage(cardElement, product) {
    const cardImage = cardElement.querySelector( '.card-image-container img');

    if(cardImage && product.image){
        cardImage.src = product.image;
        cardImage.alt = product.alt;
    };
}



function injectProductName(cardElement, product){
    const cardName = cardElement.querySelector('.product-name');
    if(cardName){
        cardName.innerText = product.name;
    };
}



function injectProductMeasureUnit(cardElement, product){
    const cardMeasureUnit = cardElement.querySelector('.product-measure');
    if(cardMeasureUnit){
    cardMeasureUnit.innerText = product.measureUnit;
    };
}



function injectProductPrice(cardElement, product){
    const cardPrice = cardElement.querySelector( '.product-price');

    if(cardPrice){

        if( typeof product.displayPrice === 'string' ){
            cardPrice.innerText = product.displayPrice;
        }else{
            cardPrice.innerText = `R$ ${product.displayPrice.toFixed(2)}`;
        }
    };
}



function injectProductDescription(cardElement, product){
    const cardInfo = cardElement.querySelector( '.card-info-row .product-info');
    if(cardInfo){
        cardInfo.innerText = product.description;
    };
}



function injectProductSizeButtonLabel(cardElement, product){
    const cardButtons = cardElement.querySelectorAll('.card-size-selector-container .size-button');

    if(cardButtons){

        //Para cada tamanho disponível no campo sizes do product
        product.sizes.forEach((size, i) => {
        
            //Coloca o botão de indice i encontrado pela querySelector na variavel currentButton.
            const curretButton = cardButtons[i];
        
            //Se o botão existe, então:
            if(curretButton){
                //Coloca o nome do tamanho contido no campo name do tamanho.
                curretButton.innerText = size.name
                //Atribui um dataSet correspondente ao índice do vetor, por exemplo: <button class="size-button" [data-size-index="i"] >size.name</button>
                curretButton.dataset.sizeIndex = i;
            };

        });

    };
}



function injectProductFlavorOptions(cardElement, product){

    
    const flavorSelector = cardElement.querySelectorAll('.card-flavor-selector-container .flavor-select');    
    
    //
    flavorSelector.forEach((select) =>{
        //Forma um array com as option disponíveis dentro do seletor atual.
        const validOptions = select.querySelectorAll('option:enabled');

        //Para cada sabor no campo sabores do produto, faz:
        product.flavors.forEach((flavor, i) =>{
            //Pega o <option> válido.
            const currentFlavor = validOptions[i];

            if(currentFlavor){
                currentFlavor.innerText = flavor.name;
                currentFlavor.value = flavor.name;
            };
        });
    });
}



function injectProductSizeOptions(cardElement,product){
    const sizeSelector = cardElement.querySelectorAll('.card-size-options-selector-container .size-select');

    sizeSelector.forEach((select) => {
        const validOptions = select.querySelectorAll('option:enabled');

        product.sizes.forEach((size, i) => {
            const currentSize = validOptions[i];

            if(currentSize){
                currentSize.innerText = size.name;
                currentSize.value = size.name;
            };
        });
    });
}



function injectProductStyleButtonLabel(cardElement,product){
    const styleSelector = cardElement.querySelectorAll('.card-style-selector-container .style-button');

    styleSelector.forEach((select,i) => {
        if(select){
            select.innerText = product.styles[i].name;
        };
    });
}