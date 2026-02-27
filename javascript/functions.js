/*=============================================
            FUNÇÕES AUXILIARES 
=============================================*/

function generateSignature( parent, product, productID){
    
    const type = parent.getAttribute('data-interaction');

    let signature = productID;

    let sizeContainer;
    let sizeIndex;
    let sizeName;

    let flavorContainer;
    let flavorIndex;
    let flavorName

    let style;
    let styleIndex;
    let styleName;

    

    switch(type){


        /*========================================
        Sem sabor para seleção, apenas tamanho.
        Exemplo: Quindim
        ======================================= */        
        case "priceBySize-simpleFlavor":

            sizeContainer = parent.querySelector('.size-button.button-selected');
            sizeIndex = sizeContainer.getAttribute('data-size-index');

            if(sizeContainer){
                sizeName = product.sizes[sizeIndex].name;
 
                signature = signature + '|' + sizeName.toLowerCase();

                signature = signature.trim();
            };

            break;

        case "priceBySize-multFlavor":

            /*Buscao a string do tamanho atual */
            size = parent.querySelector('.size-button.button-selected');
            sizeIndex = size.getAttribute('data-size-index');
            sizeName = product.sizes[sizeIndex].name;

            /*Busca a string do sabor atual */
            flavorContainer = parent.querySelector('.card-flavor-selector-container select');
            flavorIndex = flavorContainer.selectedIndex;
            flavorName = product.flavors[flavorIndex - 1].name;

            /*Monta a assinatura*/
            signature = signature + '|' + sizeName.toLowerCase() + '|' + flavorName.toLowerCase();
            signature = signature.trim();
            
            break;

        case "simpleFlavorAndSize":

                /*Busca a string do sabor atual */
                flavorContainer = parent.querySelector('.card-flavor-selector-container select');
                flavorIndex = flavorContainer.selectedIndex;
                flavorName = product.flavors[flavorIndex - 1].name;

                signature = signature + '|' + flavorName.toLowerCase();

                signature = signature.trim();

                break;

        case "priceByFlavor-staticSize":

                /*Busca a string do sabor atual */
                flavorContainer = parent.querySelector('.card-flavor-selector-container select');
                flavorIndex = flavorContainer.selectedIndex;
                flavorName = product.flavors[flavorIndex - 1].name;

                signature = signature + '|' + flavorName.toLowerCase();

                signature = signature.trim();

                break;

        case "priceByFlavor-doubleSize":

                /*Buscao a string do tamanho atual */
                size = parent.querySelector('.size-button.button-selected');
                sizeIndex = size.getAttribute('data-size-index');
                sizeName = product.sizes[sizeIndex].name;

                /*Busca a string do sabor atual */
                flavorContainer = parent.querySelector('.card-flavor-selector-container select');
                flavorIndex = flavorContainer.selectedIndex;
                flavorName = product.flavors[flavorIndex - 1].name;

                /*Monta a assinatura*/
                signature = signature + '|' + sizeName.toLowerCase() + '|' + flavorName.toLowerCase();
                signature = signature.trim();
            
                break;

        case "simpleSizeAndPrice-doubleFlavor":

            flavorContainer = parent.querySelectorAll('.card-flavor-selector-container select');
                    
            let flavorsNames = [];

            /*Busca os sabores selecionados e coloca em um array */
            flavorContainer.forEach((flavor) => {
                flavorIndex = flavor.selectedIndex;
                flavorName = product.flavors[flavorIndex - 1].name
                flavorName = flavorName.toLowerCase();
                flavorsNames.push(flavorName);

            });

            /*Ordena os saobres */
            flavorsNames.sort();
                    
            /*Cria assinatura concatenado os sabores selecionados*/
            signature = signature + '|' + flavorsNames.join('|');

            signature = signature.trim();
                    
                break;
            
        case "staticStyleAndPrice-multSize":
                
            sizeContainer =  parent.querySelector('.card-size-options-selector-container select');
            sizeIndex = sizeContainer.selectedIndex - 1;
            sizeName = product.sizes[sizeIndex].name;

            signature = signature + '|' + sizeName.toLowerCase();
            signature = signature.trim();

            break;

        case "staticPrice-multStyle-multSize":
            sizeContainer =  parent.querySelector('.card-size-options-selector-container select');
            sizeIndex = sizeContainer.selectedIndex - 1;
            sizeName = product.sizes[sizeIndex].name;

            style = parent.querySelector('.style-button.button-selected');
            styleIndex = style.getAttribute('data-size-index');
            styleName = product.styles[styleIndex].name;

            signature = signature + '|' + sizeName.toLowerCase() + '|' + styleName.toLowerCase();
            signature = signature.trim();

            break;

        case "priceByExtra-multStyle-multSize":
            style = parent.querySelector('.style-button.button-selected');
            styleIndex = style.getAttribute('data-size-index');
            styleName = product.styles[styleIndex].name;

            sizeContainer =  parent.querySelector('.card-size-options-selector-container select');
            sizeIndex = sizeContainer.selectedIndex - 1;
            sizeName = product.sizes[sizeIndex].name;

            var extraContainer = parent.querySelector('.card-extra-options-selector-container select');
            var extraIndex = extraContainer.selectedIndex - 1;
            var extraName = product.extras[extraIndex].name;

            signature = signature + '|' + sizeName.toLowerCase() + '|' + styleName.toLowerCase() + '|' + extraName.toLowerCase();

            signature = signature.trim();

            break;

        case "staticPriceAndSize-multFlavor":
            flavorContainer = parent.querySelector('.card-flavor-selector-container select');
            flavorIndex = flavorContainer.selectedIndex;
            flavorName = product.flavors[flavorIndex - 1].name;

            signature = signature + '|' + flavorName.toLowerCase();

            signature = signature.trim();
            
            break;


        default:


    }
    
    return signature;

};

function reactToButtonInteraction(classContainerName, ClassButtonName){

    const containerList = document.querySelectorAll(classContainerName);

    containerList.forEach( (currentClass) => {
        
        const buttonList = currentClass.querySelectorAll(ClassButtonName);

        buttonList.forEach((button) => {
            button.addEventListener('click', (event) => {
                colorClickedButton( button,currentClass,ClassButtonName);

                const parent = currentClass.parentElement;
                
                const currentType = parent.getAttribute('data-interaction');

                const productID = parent.getAttribute('id');

                /*Busca o produto no array de produtos*/
                const product = findProductByID(menu,productID);

                switch(currentType) {
                    case "priceBySize-simpleFlavor":

                        /*Pega o índice atual do botão clicado*/
                        var index = button.getAttribute('data-size-index');

                        enablePriceMeasure(parent, index, product);

                        switchImage(parent,index,product);

                        showWeightInfo(parent,index,product);

                        enableActionsContainer(parent);

                    break;

                    case "priceBySize-multFlavor":

                        /*Pega o índice atual do botão clicado*/
                        var index = button.getAttribute('data-size-index');
                        
                        enablePriceMeasure(parent, index, product);

                        switchImage(parent,index,product);

                        showWeightInfo(parent,index,product);
                        
                        showFlavorSelectorContainer(parent);

                        break;

                    case "priceByFlavor-doubleSize":
                        index = button.getAttribute('data-size-index');

                        showFlavorSelectorContainer(parent);

                        showWeightInfo(parent,index,product);


                        break;

                    case "staticPrice-multStyle-multSize":
                        /*Pega o índice atual do botão clicado*/
                        var index = button.getAttribute('data-size-index');

                        showSizeSelectorContainer(parent);
                        
                        switchStyleImage(parent,index,product);
                        
                        break;

                    case "priceByExtra-multStyle-multSize":
                        var index = button.getAttribute('data-size-index');

                        showExtraOptionsContainer(parent);

                        switchStyleImage(parent,index,product);
                        

                        break;
                };
            });
        });
    });
};


function showFlavorSelectorContainer(parent){

    const flavorSelectorContainer = parent.querySelector('.card-flavor-selector-container');

    if(flavorSelectorContainer){
        flavorSelectorContainer.classList.add('is-open');
    }
}

function showSizeSelectorContainer(parent){

    const sizeSelectorContainer = parent.querySelector('.card-size-options-selector-container');

    if(sizeSelectorContainer){
        sizeSelectorContainer.classList.add('is-open');

    }
}

function showExtraOptionsContainer(parent){

    const extraContainer = parent.querySelector('.card-extra-options-selector-container');

    if(extraContainer){
        extraContainer.classList.add('is-open');

    }

}


function showWeightInfo(parent,index,product){

    /*Faça a linha de informação expandir */
    const cardInfoRow = parent.querySelector('.card-info-row.weight-info');
    cardInfoRow.classList.add('is-open');

    /*Informa o peso do tamanho selecionado*/
    temp = cardInfoRow.querySelector('.product-info');

    /*Exibe o texto.*/
    temp.innerText = product.sizes[index].weightDescription;
};



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
        cardQuantityLabel.value = finalQuantity;
        cardQuantityLabel.min = finalQuantity;

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

        cardMeasureUnit.classList.add('is-open');
        cardMeasureUnit.innerText = product.measureUnit;
        
    };
}



function injectProductPrice(cardElement, product){
    const cardPrice = cardElement.querySelector( '.product-price');

    cardPrice.classList.add('is-open');

    if(cardPrice){

        if( typeof product.displayPrice === 'string' ){
            cardPrice.innerText = product.displayPrice;
        }else{
            cardPrice.innerText = `R$ ${product.displayPrice.toFixed(2)}`;
            injectProductMeasureUnit(cardElement,product);
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


function injectProductStyleButtonLabel(cardElement, product){
    const cardButtons = cardElement.querySelectorAll('.card-style-selector-container .style-button');

    if(cardButtons){

        //Para cada tamanho disponível no campo sizes do product
        product.styles.forEach((style, i) => {
        
            //Coloca o botão de indice i encontrado pela querySelector na variavel currentButton.
            const curretButton = cardButtons[i];
        
            //Se o botão existe, então:
            if(curretButton){
                //Coloca o nome do tamanho contido no campo name do tamanho.
                curretButton.innerText = style.name
                //Atribui um dataSet correspondente ao índice do vetor, por exemplo: <button class="size-button" [data-size-index="i"] >size.name</button>
                curretButton.dataset.sizeIndex = i;
            };

        });

    };
}

function showFlavorInfo( parent, index){

    const id = parent.getAttribute('id');
    const product = findProductByID(menu, id);
    const flavorInfoRow = parent.querySelector('.card-info-row.flavor-info');

    /*Caso exista a descrição do sabor do produto */
    if(product.flavors[index].flavorDescription){
        
        /*Expande o campo da descrição do sabor */
        flavorInfoRow.classList.add('is-open');

        const productInfo = flavorInfoRow.querySelector('.product-info');
        
        /*Injeta a descrição do sabor*/
        productInfo.innerText = product.flavors[index].flavorDescription;

    }else{  /*Caso não exista descrição do sabor */
        flavorInfoRow.classList.remove('is-open');
    };

    enableActionsContainer(parent);
}



function injectProductFlavorOptions(cardElement, product){

    
    const flavorSelector = cardElement.querySelectorAll('.card-flavor-selector-container .flavor-select');    
    
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



function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function injectExtraOptions(cardElement, product){

    const extraSelect = cardElement.querySelector('.card-extra-options-selector-container .extra-select');

    const options = extraSelect.querySelectorAll('option:enabled');

    options.forEach((option, i) => {
        const currentExtra = product.extras[i].name;

        option.value = currentExtra.toLowerCase();

        option.innerText = currentExtra;
    
    })
}


async function waitFor(ms) {

  await wait(ms);
  
}


function enableActionsContainer(parent){

    /*Busca o container de ações de compra e quantidade*/
    var cardActionsContainer = parent.querySelector('.card-actions-container');

    if(cardActionsContainer){ 

        /*Habilita o seletor de quantidade removendo a classe "is-disabled" */
        var temp = cardActionsContainer.querySelector('.quantity-selector');
        temp.classList.remove('is-disabled');

        var buttons = temp.querySelectorAll('button');
        buttons.forEach( (button) => {
        button.disabled = false;

        });

        /*Habilita inserir a quantidade de compra*/
        temp = parent.querySelector('.quantity-value');
        temp.disabled = false;

        /*Habilita o botão para adicionar ao carrinho*/
        enableAddToCartButton(parent);

    }else{
        cardActionsContainer = parent.querySelector('.card-actions-container-right');
    
        /*Habilita o botão para adicionar ao carrinho*/
        enableAddToCartButton(parent);
    };


};

function enableAddToCartButton(parent){
    const button = parent.querySelector('.add-to-cart-button');

    button.classList.remove('is-disabled');
    button.disabled = false;

}

function enablePriceMeasure(parent, index, product){
    /*Busca o container price-measure*/
    const priceMeasure = parent.querySelector('.price-measure');

    /*Busca o container product-price que é filho do price-measure */
    var temp = priceMeasure.querySelector('.product-price');
    
    const productType = parent.getAttribute('data-interaction');

    switch(productType){

        case "priceByFlavor-doubleSize":
            if( typeof product.flavors[index].displayPrice === 'string'){
                /*Se o displayPrice for uma string, mostra apenas a string. Ex: displayPrice: "Consulte valores" */
                temp.innerText = product.flavors[index].displayPrice;

            }else{
                temp.classList.add('is-open');
                /*Se for um número, coloca o cifrão na frente */
                temp.innerText = `R$ ${product.flavors[index].displayPrice.toFixed(2)}`;

                /*E adiciona a unidade de medida do produto */
                temp = priceMeasure.querySelector('.product-measure');
                temp.classList.add('is-open');
                temp.innerText = product.measureUnit;

            };

            break;

        case "priceByFlavor-staticSize":
            if( typeof product.flavors[index].displayPrice === 'string'){
                /*Se o displayPrice for uma string, mostra apenas a string. Ex: displayPrice: "Consulte valores" */
                temp.innerText = product.flavors[index].displayPrice;

            }else{
                temp.classList.add('is-open');
                /*Se for um número, coloca o cifrão na frente */
                temp.innerText = `R$ ${product.flavors[index].displayPrice.toFixed(2)}`;

                /*E adiciona a unidade de medida do produto */
                temp = priceMeasure.querySelector('.product-measure');
                temp.classList.add('is-open');
                temp.innerText = product.measureUnit;

            };

            break;

        default:
            if( typeof product.sizes[index].displayPrice === 'string'){
                /*Se o displayPrice for uma string, mostra apenas a string. Ex: displayPrice: "Consulte valores" */
                temp.innerText = product.sizes[index].displayPrice;

            }else{
                temp.classList.add('is-open');
                /*Se for um número, coloca o cifrão na frente */
                temp.innerText = `R$ ${product.sizes[index].displayPrice.toFixed(2)}`;

                /*E adiciona a unidade de medida do produto */
                temp = priceMeasure.querySelector('.product-measure');
                temp.classList.add('is-open');
                temp.innerText = product.measureUnit;
            };

    }

};


function switchImage(parent, index, product){

    const imageContainer = parent.querySelector('.card-image-container img');
    switch(product.type){

        case "staticPriceAndSize-multFlavor":
            imageContainer.src = product.flavors[index].image;

            break;

        default:    
            if(imageContainer && product.sizes[index].image){
                imageContainer.src = product.sizes[index].image;
                imageContainer.alt = product.sizes[index].alt;
            }else{
                imageContainer.src = product.image;
            }
    }
};


function switchStyleImage(parent,index,product){

    const imageContainer = parent.querySelector('.card-image-container img');

    if(imageContainer && product.styles[index].image){
        imageContainer.src = product.styles[index].image;
        imageContainer.alt = product.styles[index].alt;
    }else{
        imageContainer.src = product.image;
    }
}


function findProductByID(menu, id){

    const product = menu.find( item => item.id === id);
    return product;

}

function renderStaticPriceAndSize(cardElement,product){
    injectProductDefaultImage(cardElement, product);
    injectProductName(cardElement, product);           
    injectProductPrice(cardElement, product);
    injectProductDescription(cardElement, product);
    injectProductQuantityLabel(cardElement, product);
    enableActionsContainer(cardElement);

}

function renderPriceBySizeSimpleFlavor(cardElement,product){
    injectProductDefaultImage(cardElement, product);
    injectProductName(cardElement, product);
    injectProductQuantityLabel(cardElement, product);
    injectProductSizeButtonLabel( cardElement,product);

}

function renderPriceBySizeMultFlavor(cardElement,product){
    injectProductDefaultImage(cardElement,product);
    injectProductName(cardElement, product);
    injectProductQuantityLabel( cardElement, product);
    injectProductSizeButtonLabel(cardElement, product)
    injectProductFlavorOptions(cardElement, product);

}


function renderSimpleFlavorAndSize(cardElement,product){
    injectProductDefaultImage(cardElement,product);
    injectProductName(cardElement, product);
    injectProductPrice(cardElement, product);
    injectProductDescription(cardElement, product);
    injectProductFlavorOptions(cardElement,product);
    injectProductQuantityLabel(cardElement,product);

}


function renderPriceByFlavorStaticSize(cardElement,product){
    injectProductDefaultImage(cardElement,product);
    injectProductName(cardElement,product);
    injectProductDescription(cardElement,product);
    injectProductFlavorOptions(cardElement, product);
    injectProductQuantityLabel(cardElement,product);

}

function renderSimpleSizeAndPriceDoubleFlavor(cardElement,product){
    injectProductDefaultImage(cardElement,product);
    injectProductName(cardElement,product);
    injectProductPrice(cardElement,product);
    injectProductDescription(cardElement,product);
    injectProductFlavorOptions(cardElement,product);

}

function renderPriceByFlavorDoubleSize(cardElement,product){
    injectProductDefaultImage(cardElement,product);
    injectProductName(cardElement,product);
    injectProductSizeButtonLabel(cardElement,product);
    injectProductFlavorOptions(cardElement,product);
            
}

function renderStaticStyleAndPriceMultSize(cardElement,product){
    injectProductDefaultImage(cardElement,product);
    injectProductName(cardElement,product);
    injectProductDescription(cardElement, product);
    injectProductSizeOptions(cardElement,product);
    injectProductPrice(cardElement,product);
                
}


function renderStaticPriceMultStyleMultSize(cardElement,product){
    injectProductDefaultImage(cardElement,product);
    injectProductName(cardElement,product);
    injectProductPrice(cardElement,product);
    injectProductDescription(cardElement,product);
    injectProductStyleButtonLabel(cardElement,product);
    injectProductSizeOptions(cardElement,product);

}

function renderRiceByExtraMultStyleMultSize(cardElement,product){
    injectProductDefaultImage(cardElement,product);
    injectProductName(cardElement, product);
    injectProductStyleButtonLabel(cardElement,product);
    injectProductDescription(cardElement,product);
    injectProductSizeOptions(cardElement,product);
    injectExtraOptions(cardElement,product);
    injectProductPrice(cardElement,product);

}

function renderStaticPriceAndSizeMultFlavor(cardElement,product){
    injectProductDefaultImage(cardElement,product);                
    injectProductName(cardElement,product);
    injectProductPrice(cardElement,product);
    injectProductDescription(cardElement,product);
    injectProductFlavorOptions(cardElement,product);

}

function reloadProductCard(parent, product ){

    const interaction = parent.getAttribute('data-interaction');



    switch(interaction){
            case "staticPriceAndSize":
                renderStaticPriceAndSize(parent,product);

                break;
            
            case "priceBySize-simpleFlavor":
                retractInfoRow(parent);
                hidePrice(parent);
                clearSizeButton(parent);
                resetQuantitySelector(parent);
                renderPriceBySizeSimpleFlavor(parent,product);

                break;
            
            case "priceBySize-multFlavor":
                hideFlavorSelect(parent);
                hidePrice(parent);
                retractInfoRow(parent);
                clearSelect(parent);
                clearSizeButton(parent);
                renderPriceBySizeMultFlavor(parent,product);

                break;

            case "simpleFlavorAndSize":
                clearSelect(parent);
                renderSimpleFlavorAndSize(parent,product);
                break;

            case "priceByFlavor-staticSize":
                clearSelect(parent);
                renderPriceByFlavorStaticSize(parent,product);

                break;

            case "simpleSizeAndPrice-doubleFlavor":
                clearSelect(parent);
                renderSimpleSizeAndPriceDoubleFlavor(parent,product);

                break;

            case "priceByFlavor-doubleSize":
                clearSelect(parent);
                clearSizeButton(parent);
                renderPriceByFlavorDoubleSize(parent,product);
                break;

            case "staticStyleAndPrice-multSize":
                clearSelect(parent);
                renderStaticStyleAndPriceMultSize(parent,product);
                break;

            case "staticPrice-multStyle-multSize":
                clearSelect(parent);
                clearStyleButton(parent);
                renderStaticPriceMultStyleMultSize(parent,product);

                break;

            case "priceByExtra-multStyle-multSize":
                clearSelect(parent);
                clearStyleButton(parent);
                renderRiceByExtraMultStyleMultSize(parent,product)

            break;
            
            case "staticPriceAndSize-multFlavor":
                clearSelect(parent);
                renderStaticPriceAndSizeMultFlavor(parent,product);
            
                break;

    }


}

function clearSelect(parent){
    const selects = parent.querySelectorAll("select");

    selects.forEach((select)=>{
        select.value = "";
    })
}

function clearStyleButton(parent){
    const buttons = parent.querySelectorAll(".style-button");

    buttons.forEach((button)=>{
        button.classList.remove('button-selected');

    })

}

function clearSizeButton(parent){
    const buttons = parent.querySelectorAll(".size-button");

    buttons.forEach((button)=>{
        button.classList.remove('button-selected');

    })
}

function hidePrice(parent){
    const price = parent.querySelector('.product-price');
    const measure = parent.querySelector('.product-measure');

    price.classList.remove('is-open');
    measure.classList.remove('is-open');

}

function retractInfoRow(parent){
    const infoRows = parent.querySelectorAll('.card-info-row');

    infoRows.forEach( (infoRow) =>{
        infoRow.classList.remove('is-open');

    })

}

function hideFlavorSelect(parent){
    const container = parent.querySelector('.card-flavor-selector-container');

    container.classList.remove('is-open');
}

function resetQuantitySelector(parent){
    const quantitySelector = parent.querySelector('.quantity-selector');

    quantitySelector.classList.add('is-disabled');

    const buttons = quantitySelector.querySelectorAll('button');

    buttons.forEach( (button) => {
        button.disabled = true;
    });
}