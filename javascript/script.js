
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



menu.forEach( (product) => {
    

    //Procura no HTML o elemento com o mesmo ID
    const cardElement = document.getElementById(product.id);

    if(cardElement){
        console.log(cardElement)

        switch(product.type){
            case "staticPriceAndSize":
                const cardImage = cardElement.querySelector( '.card-image-container img');

                if( cardImage && product.image){
                    cardImage.src = prodcut.image;


                };





            
            break;
        }


    };

    


});