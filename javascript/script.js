
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

        console.log(targetSection);

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