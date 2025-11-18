
const menuCategories = document.querySelectorAll(".category-section");

//Obtem todos os elementos do tipo "<a href="#doces-section">DOCES</a>" e armazena em um array.
const menuLinks = document.querySelectorAll( ".main-menu a");

//Adicone um "EventeListener" em cada "botão" do menu para monitorar uma ação click.
menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        //Elimina o coportamente padrão do navegador
        event.preventDefault();


        //Dentro do elemento do tipo "<a href="#doces-section">DOCES</a>" busca o que esta em href, no exemplo #doces-section.
        const currentId = link.getAttribute('href');

        //Proocura no HTML uma seção com o mesmo nome que o a variavel de currentID.
        //No exemplo, ele procura um elemento que tenha o ID = #doces-section
        const targetSection = document.querySelector(currentId);

        //Busca todos os elementos com a propriedade .category-visible
        const visibleCategories = document.querySelectorAll(".category-visible");
        //Remove a propriedade .category-visible de cada uma.
        visibleCategories.forEach( (category) => {
            category.classList.remove('category-visible')

        }) ;

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



/*=============================================
            FUNÇÕES AUXILIARES 
=============================================*/


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
    if( cardImage && product.image){
        cardImage.src = product.image;
    };
}



function injectProductName(cardElement, product){
     const cardName = cardElement.querySelector('.product-name');
    if( cardName){
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
    const cardInfo = cardElement.querySelector( '.card-info-row.weight-info .product-info');
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

    //Pegas as opções de sabores habilitadas (option:enabled).
    const validOptions = cardElement.querySelectorAll('.card-flavor-selector-container option:enabled');
    
    product.flavors.forEach((flavor, i) => {

        const currentFlavor = validOptions[i];

        if(currentFlavor){
            currentFlavor.innerText = flavor.name;
            currentFlavor.value = flavor.name;
        };
    });
}



/*=============================
        CARD RENDER
=============================*/
menu.forEach( (product) => {
    //Procura no HTML o elemento com o mesmo ID
    const cardElement = document.getElementById(product.id);

    if(cardElement){
        console.log(cardElement)

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

                break;

            case "simpleFlavorAndSize":
                injectProductDefaultImage(cardElement,product);

                injectProductMeasureUnit(cardElement,product);

                injectProductName(cardElement, product);

                injectProductPrice(cardElement, product);

                injectProductDescription(cardElement, product);

                injectProductFlavorOptions(cardElement,product);
            break;
        }


    };

    


});