



//Menu é um vetor dinâmico que representa os produtos,
const menu = [

/*========================================
                SALGADOS
 ========================================*/
    // DATA-INTERACTION = "staticPriceAndSize"
    {
        id: "bolinha-queijo",
        name: "BOLINHA DE QUEIJO",
        category: "salgados",
        price: 1.80,
        displayPrice: 1.80,
        image:"/img/card-images/bolinha-queijo.jpg",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true,
    },


    {
        id: "coxinha-frango",
        name: "COXINHA",
        category: "salgados",
        price: 1.60,
        displayPrice: 1.60,
        image:"/img/card-images/coxinha-frango.webp",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true
    },


    {
        id: "croquete-carne",
        name: "CROQUETE CARNE",
        category: "salgados",
        price: 1.80,
        displayPrice: 1.80,
        image:"/img/card-images/croquete-de-carne.jpg",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true
    },


    {
        id: "enroladinho-frito",
        name: "ENROLADINHO FRITO",
        category: "salgados",
        price: 1.60,
        displayPrice: 1.60,
        image:"/img/card-images/enroladinho-frito.jpg",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true
    },


    {
        id: "folhadinho-salsicha",
        name: "FOLHADINHO DE SALSICHA",
        category: "salgados",
        price: 1.80,
        displayPrice: 1.80,
        image:"/img/card-images/folhadinho-salsicha.png",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true
    },


    {
        id: "doguinho-salsicha",
        name: "DOGUINHO",
        category: "salgados",
        price: 1.80,
        displayPrice: 1.80,
        image:"/img/card-images/doguinho-salsicha.png",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true
    },


    {
        id: "prensadinho",
        name: "PRENSADINHO",
        category: "salgados",
        price: 2.60,
        displayPrice:2.60,
        image:"/img/card-images/sanduiche-prensadinho.png",
        type: "staticPriceAndSize",
        description: "Aproximadamente 40 gramas",
        measureUnit: "UN",
        isSummable: true
    },


    {
        id: "cachorro-quente",
        name: "CACHORRO QUENTE",
        category: "salgados",
        price: 2.50,
        displayPrice: 2.50,
        image:"/img/card-images/cachorro-quente.jpg",
        type: "staticPriceAndSize",
        description: "Pãozinho fofinho com suculento recheio de salsicha picada ao molho de tomate, temperado com alho, cebola e um toque de salsa. Aprox. 40g por unidade.",
        measureUnit: "UN",
        isSummable: true
    },

    // DATA-INTERACTION = "simpleFlavorAndSize"
    {
        id: "risoles",
        name: "RISOLES",
        category: "salgados",
        price: 1.60,
        displayPrice: 1.60,
        image:"/img/card-images/risoles.png",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true,
        flavors : [
            {   
                name: "Carne",
                flavorDescription:  ""
            },

            {
                name: "Frango",
                flavorDescription: ""
            },

            {
                name: "Palmito",
                flavorDescription: ""
            },

            {
                name: "Calabresa",
                flavorDescription: ""
            },

            {
                name: "Queijo",
                flavorDescription: ""
            },

        ]
    },

    {
        id: "pastel-pastelina",
        name: "PASTEL DE PASTELINA",
        category: "salgados",
        price: 2.00,
        displayPrice: 2.00,
        image:"/img/card-images/pastel-pastelina.jpg",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true,
        flavors : [
            {   
                name: "Carne",
                flavorDescription:  ""
            },

            {
                name: "Frango",
                flavorDescription: ""
            }
        ]
    },

    {
        id: "empadinha-assada",
        name: "EMPADINHA",
        category: "salgados",
        price: 2.30,
        displayPrice: 2.30,
        image:"/img/card-images/empadinha-assada.avif",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true,
        flavors : [
            {   
                name: "Frango",
                flavorDescription:  ""
            },

            {
                name: "Palmito",
                flavorDescription: ""
            }
        ]
    },

    {
        id: "pastel-forno",
        name: "PASTEL DE FORNO",
        category: "salgados",
        price: 1.80,
        displayPrice: 1.80,
        image:"/img/card-images/pastelzinho-forno.jpg",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true,
        flavors : [
            {   
                name: "Carne",
                flavorDescription:  ""
            },

            {
                name: "Frango",
                flavorDescription: ""
            },

            {
                name: "Brócolis",
                flavorDescription: ""
            },

            {
                name: "Palmito",
                flavorDescription: ""
            }
        ]
    },


    {
        id: "canape",
        name: "CANAPÉ",
        category: "salgados",
        price: 2.80,
        displayPrice: 2.80,
        image:"/img/card-images/canape.jpg",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true,
        flavors : [
            {   
                name: "Gorgonzola & Nozes",
                flavorDescription:  ""
            },

            {
                name: "Tomate Seco",
                flavorDescription: ""
            },

            {
                name: "Palmito",
                flavorDescription: ""
            }
        ]
        
    },

    {
        id: "mini-quiche",
        name: "MINI QUICHE",
        category: "salgados",
        price: 2.80,
        displayPrice: 2.80,
        image:"/img/card-images/mini-quiche.jpg",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true,
        flavors : [
            {   
                name: "Frango",
                flavorDescription:  ""
            },

            {
                name: "Lorraine",
                flavorDescription: ""
            },

            {
                name: "Palmito",
                flavorDescription: ""
            },

            {
                name: "Alho Poró",
                flavorDescription: ""
            },

           {
                name: "Queijo",
                flavorDescription: ""
            }

        ]
        
    },

    {
        id: "mini-pizza",
        name: "MINI PIZZA",
        category: "salgados",
        price: 2.80,
        displayPrice: 2.80,
        image:"/img/card-images/mini-pizza.png",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 50 gramas",
        measureUnit: "UN",
        isSummable: true,
        flavors : [
            {   
                name: "Frango",
                flavorDescription:  ""
            },

            {
                name: "Mussarela",
                flavorDescription: ""
            },

            {
                name: "Marguerita",
                flavorDescription: ""
            }
        ]
    },

     {
        id: "barquete",
        name: "BARQUETE",
        category: "salgados",
        price: 2.80,
        displayPrice: 2.80,
        image:"/img/card-images/barquete.png",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 50 gramas",
        measureUnit: "UN",
        isSummable: true,
        flavors : [
            {   
                name: "Tomate Seco",
                flavorDescription:  ""
            },

            {
                name: "Fios de Ovos",
                flavorDescription: ""
            }
        ]
    },




    // DATA-INTERACTION = "priceByFlavor-staticSize"
    {
        id:"mini-hamburguer",
        name: "MINI HAMBURGUER",
        category: "salgados",
        image:"/img/card-images/mini-hamburguer.webp",
        type: "priceByFlavor-staticSize",
        description: "Aproximadamente 90 gramas",
        measureUnit: "UN",
        isSummable: true,
        flavors : [
            {   
                name: "Tradicional",
                flavorDescription:  "",
                price: 5.00,
                displayPrice: 5.00,
            },

            {
                name: "Cheddar",
                flavorDescription: "",
                price: 5.00,
                displayPrice: 5.00,
            },

            {
                name: "Vegetariano",
                flavorDescription: "",
                price: 3.50,
                displayPrice: 3.50
            }
        ]
    },

    // DATA-INTERACTION = "priceBySize-multFlavor"
    {
        id:"torta-quiche",
        name: "TORTA QUICHE",
        category: "salgados",
        type: "priceBySize-multFlavor",
        image: "/img/card-images/quiche-pequeno.jpg",
        measureUnit: "UN",
        isSummable: true,
        sizes : [
            {
                name: "PEQUENO",
                price: 90.00,
                displayPrice: 90.00,
                weightDescription: "Com ??, nossa quiche é extremamente bem servida. Rende 6 fatias, perfeitas para compartilhar (ou não!).",
                image:"/img/card-images/quiche-pequeno.jpg",
            },

            {
                name: "GRANDE",
                price: 140.00,
                displayPrice: 140.00,
                weightDescription: "Com 1,5kg de puro sabor, nossa quiche grande impressiona. Rende 10 fatias generosas, perfeitas para alimentar toda a família ou amigos.",
                image:"/img/card-images/quiche-pequeno.jpg",
            }
        ],
        
        flavors : [
            {   
                name: "Frango",
                flavorDescription:  "Cremosidade em dobro. Massa fininha recheada com frango, requeijão e creme de leite. O resultado é um recheio ultra úmido e saboroso que derrete na boca"
            },

            {
                name: "Lorraine",
                flavorDescription: "A autêntica Quiche Lorraine com massa fina e recheio cremoso. Combina bacon crocante, ovos, creme de leite e a riqueza dos quejos prato e parmessão. Um clássico francês irresistível e saboroso!"
            },

            {
                name: "Alho Poró",
                flavorDescription: " Para quem busca leveza, o nosso Quiche de Alho Poró combina massa fina recheada com alho-poró selecionado, requeijão e creme de leite. Um recheio cremoso, aromático e muito saboroso."
            }
        ]
    },


    // DATA-INTERACTION = "simpleSizeAndPrice-doubleFlavor"
    {
        id: "pizza-pan",
        name: "PIZZA PAN",
        type: "simpleSizeAndPrice-doubleFlavor",
        image: "/img/card-images/pizza-pan.jpg",
        description: "Pizza Pan quadrada de massa alta e fofinha. São 12 fatias e cerca de 2kg de sabor. Perfeita para dividir, escolha até 2 sabores!" ,
        price: 59.90,
        displayPrice: 59.90,
        measureUnit: "KG",
        isSummable: false,
        flavors: [
            {
                name:"Calabresa"
            },

            {
                name: "Quatro queijos"
            },

            {
                name: "Frango & Catupiry"
            }

        ]
    },


    // DATA-INTERACTION = "priceByFlavor-doubleSize"
    {
        id: "torta-fria",
        name: "TORTA FRIA",
        image: "/img/card-images/torta-fria.jpg",
        type: "priceByFlavor-doubleSize",
        measureUnit: "KG",
        isSummable: false,
        sizes: [

            {
                name: "INTEIRA",
                weightDescription:"Pesa aproximadamente 1.5 quilos e serve 10 fatias generosas"
            },

            {
                name: "MEIA",
                weightDescription:"Pesa aproximadamente 700 gramas e serve 6 fatias."
            }


        ],

        flavors : [

            {
                name: "Frango",
                flavorDescription:"Pão macio, frango cremoso (maionese e creme de leite), queijo e cenoura. Finalizada com picles, trazendo um toque especial e refrescante.",
                price: 88.00,
                displayPrice: 88.00
            },

            {
                name: "Frios",
                flavorDescription: "Pão macio, presunto e queijo envolvidos em nosso creme suave (maionese e creme de leite) e cenoura. Finalizada com picles, trazendo um toque especial e marcante.",
                price: 88.00,
                displayPrice: 88.00
            },

            {
                name: "Atum",
                flavorDescription: "Pão macio, atum e queijo envolvidos em nosso creme suave (maionese e creme de leite) e cenoura. Finalizada com picles, trazendo um toque especial e marcante",
                price: 98.00,
                displayPrice: 98.00
            }


        ]

    },


    /*========================================
                    DOCES
    ========================================*/
    // DATA-INTERACTION = "staticPriceAndSize"
    {
        id: "brigadeiro-preto",
        name: "BRIGADEIRO",
        category: "doces",
        price: 1.70,
        displayPrice: 1.70,
        image:"/img/card-images/brigadeiro-preto01.png",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true,
    },

    {
        id: "brigadeiro-branco",
        name: "BRANQUINHO",
        category: "doces",
        price: 1.70,
        displayPrice:1.70,
        image:"/img/card-images/brigadeiro-branco.png",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true,
    },


    {
        id: "beijinho",
        name: "BEIJINHO",
        category: "doces",
        price: 1.70,
        displayPrice: 1.70,
        image:"/img/card-images/beijinho-coco.png",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true
    },


    {
        id: "docinho-amendoim",
        name: "AMENDOIM",
        category: "doces",
        price: 1.70,
        displayPrice: 1.70,
        image:"/img/card-images/docinho-amendoim.png",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true,
    },


    {
        id: "doce-de-leite",
        name: "DOCE DE LEITE",
        category: "doces",
        price: 2.20,
        displayPrice: 2.20,
        image:"/img/card-images/doce-de-leite.png",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true
    },


    {
        id: "docinho-nozes",
        name: "NOZES",
        category: "doces",
        price: 2.00,
        displayPrice: 2.00,
        image:"/img/card-images/brigadeiro-nozes.png",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true,
    },


    {
        id: "olho-sogra",
        name: "OLHO DE SOGRA",
        category: "doces",
        price: 2.00,
        displayPrice: 2.00,
        image:"/img/card-images/olho-de-sogra.jpg",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true
    },


    {
        id: "ninho-nutella",
        name: "NINHO & NUTELLA",
        category: "doces",
        price: 2.20,
        displayPrice:2.20,
        image:"/img/card-images/leite-ninho-nutell.jpg",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true
    },


    {
        id: "camafeu-nozes",
        name: "CAMAFEU",
        category: "doces",
        price: 2.90,
        displayPrice: 2.90,
        image:"/img/card-images/camafeu-branco.webp",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
        isSummable: true
    },

    // DATA-INTERACTION = "priceBySize-multFlavor"
    {
        id: "cupcake",
        name: "CUPCAKE",
        image: "/img/card-images/cupcake-tradicional.webp",
        type: "priceBySize-multFlavor",
        measureUnit: "UN",
        isSummable: true,
        sizes: [

            {
                name: "MINI",
                weightDescription:"Pesa aproximadamente TANTAS GRAMAS",
                price: 4.90,
                displayPrice: 4.90
            },

            {
                name: "TRADICIONAL",
                weightDescription:"Pesa aproximadamente TANTAS GRAMAS",
                price: 8.00,
                displayPrice: 8.00
            }


        ],

        flavors : [

            {
                name: "Chocolate",
                flavorDescription:"Massa úmida de chocolate, recheada com creme de leite condensado e coberta por uma camada de ganache de chocolate.",
            },

            {
                name: "Red Velvet",
                flavorDescription: "A clássica massa vermelha aveludada, recheada com creme de leite condensado e finalizada com cobertura suave de ganache branco.",
            },

            {
                name: "Cenoura",
                flavorDescription: "Massa fofinha de cenoura, recheada com creme de leite condensado e finalizada com cobertura de ganache de chocolate.",
            }
        ]
    },


        // DATA-INTERACTION = "priceBySize-simpleFlavor"
    {
        id: "quindim",
        name: "QUINDIM",
        type: "priceBySize-simpleFlavor",
        image: "/img/card-images/quindim-mini.webp",
        measureUnit: "UN",
        category: "doces",
        isSummable: true,

        sizes:[
            {   
                name: "MINI",
                weightDescription: "",
                price: 2.90,
                displayPrice: 2.90,
                image: "/img/card-images/quindim-mini.webp"
            },

            {
                name: "TRADICIONAL",
                weightDescription: "",
                price: 4.50,
                displayPrice: 4.50,
                image: "/img/card-images/quindim-tradicional.jpg"
            }
        ]
    },

    /*========================================
                    TORTAS
    ========================================*/
    //DATA-INTERACTION: "staticStyleAndPrice-multSize"

    {
        id:"torta-macron",
        name: "TORTA MACRON",
        measureUnit: "KG",
        type: "staticStyleAndPrice-multSize",
        image: "/img/card-images/bolo-macron.png",
        price: 79.90,
        displayPrice: 79.90,
        description:"Base de bolo macron de coco queimado, recheada com ovos moles e um toque azedo de polpa de ameixa. Uma combinação perfeitamente equilibrada.",
        isSummable: false,
        sizes: [
            {
                name: "Mini",
                weightDescription: "",
            },

            {
                name: "Pequena",
                weightDescription: "",
            },

            {
                name: "Média",
                weightDescription: "",
            },

        ]

    },

    {
        id:"torta-cremes",
        name: "TORTA DE CREMES",
        measureUnit: "KG",
        type: "staticStyleAndPrice-multSize",
        image: "/img/card-images/bolo-cremes.png",
        price: 79.90,
        displayPrice: 79.90,
        description:"Uma combinação generosa de sabores sobre um pão de ló mesclado (branco e preto). Desfrute das camadas de ovos moles artesanais, doce de leite, polpa de ameixa e um delicioso creme de leite condensado com coco.",
        isSummable: false,

        sizes: [
            {
                name: "Mini",
                weightDescription: "",
            },

            {
                name: "Pequena",
                weightDescription: "",
            },

            {
                name: "Média",
                weightDescription: "",
            },

            {
                name: "Grande",
                weightDescription: "",
            },

            {
                name: "Família",
                weightDescription: "",
            },
        ]
    },

    {
        id:"torta-noiva-do-mar",
        name: "TORTA NOIVA DO MAR",
        measureUnit: "KG",
        type: "staticStyleAndPrice-multSize",
        image: "/img/card-images/torta-noiva-do-mar.jpeg",
        price: 89.90,
        displayPrice: 89.90,
        description:"Uma homenagem à nossa praia, esta torta equilibra o doce e o sofisticado. Possui uma base macia de bolo de aveia coberta por camadas de creme de coco, o clássico leite condensado cozido e um toque de polpa de ameixa, finalizada com a crocância de um praline de nozes.",
        isSummable: false,
        sizes: [
            {
                name: "Mini",
                weightDescription: "",
            },

            {
                name: "Pequena",
                weightDescription: "",
            },

            {
                name: "Média",
                weightDescription: "",
            },
        ]
    },

    {
        id:"torta-morango-bronzeado",
        name: "TORTA MORANGO BRONZEADO",
        measureUnit: "KG",
        type: "staticStyleAndPrice-multSize",
        image: "/img/card-images/bolo-morango-moreno.png",
        price: 0,
        displayPrice: "Consulte valores",
        description:"Morangos frescos e o bronze do leite condensado cozido encontram um pão de ló de chocolate macio e nosso chantilly de nata caseiro. Simplesmente irresistível.",
        isSummable: false,

        sizes: [
            {
                name: "Mini",
                weightDescription: "",
            },

            {
                name: "Pequena",
                weightDescription: "",
            },

            {
                name: "Média",
                weightDescription: "",
            },

            {
                name: "Grande",
                weightDescription: "",
            },

                        {
                name: "Família",
                weightDescription: "",
            },
        ]
    },

    {
        id:"torta-morango-nata",
        name: "TORTA MORANGO NATA",
        measureUnit: "KG",
        type: "staticStyleAndPrice-multSize",
        image: "/img/card-images/torta-morango-nata.png",
        price: 0,
        displayPrice: "Consulte valores",
        description:"Uma sobremesa leve e refrescante. Combina morangos frescos, nosso chantilly artesanal de nata e pedaços crocantes de merengão, tudo sobre uma base macia de pão de ló de chocolate branco.",
        isSummable: false,

        sizes: [
            {
                name: "Mini",
                weightDescription: "",
            },

            {
                name: "Pequena",
                weightDescription: "",
            },

            {
                name: "Média",
                weightDescription: "",
            },

            {
                name: "Grande",
                weightDescription: "",
            },

                        {
                name: "Família",
                weightDescription: "",
            },
        ]
    },

    //DATA-INTERACTION: "staticPrice-multStyle-multSize"

    {
        id:"torta-ouro-branco",
        name: "TORTA OURO BRANCO",
        measureUnit: "KG",
        type: "staticPrice-multStyle-multSize",
        price: 79.90,
        displayPrice:79.90,
        image: "/img/card-images/torta-ouro-branco.png",
        description:"A combinação perfeita de chocolate e cremes brancos. Base de pão de ló preto intenso, recheada em camadas com um suave creme de baunilha, mousse branco aerado e generosos pedaços de bombom Ouro Branco.",
        isSummable: false,

        styles: [

            {
                name: "TRADICIONAL",
                image: "/img/card-images/torta-ouro-branco.png",
            },

            {
                name:"NAKED",
                image: ""
            }
        ],

        sizes: [
            {
                name: "Mini",
                weightDescription: "",
            },

            {
                name: "Pequena",
                weightDescription: "",
            },

            {
                name: "Média",
                weightDescription: "",
            },

            {
                name: "Grande",
                weightDescription: "",
            },

            {
                name: "Família",
                weightDescription: "",
            },
        ]
    },

    {
        id:"torta-nozes",
        name: "TORTA DE NOZES",
        measureUnit: "KG",
        type: "staticPrice-multStyle-multSize",
        price: 98.00,
        displayPrice: 98.00,
        image: "/img/card-images/torta-nozes.png",
        description: "Intensidade e crocância. Esta torta une um pão de ló de chocolate preto, o recheio cremoso de leite condensado cozido e a textura única das nozes caramelizadas feitas aqui na casa.",
        isSummable: false,

        styles: [

            {
                name: "TRADICIONAL",
                image: "/img/card-images/torta-nozes.png",
            },

            {
                name:"NAKED",
                image: ""
            }
        ],

        sizes: [
            {
                name: "Mini",
                weightDescription: "",
            },

            {
                name: "Pequena",
                weightDescription: "",
            },

            {
                name: "Média",
                weightDescription: "",
            },

            {
                name: "Grande",
                weightDescription: "",
            },

            {
                name: "Família",
                weightDescription: "",
            },
        ]
    },

    {
        id:"torta-tropicalia",
        name: "TORTA TROPICALIA",
        measureUnit: "KG",
        type: "staticPrice-multStyle-multSize",
        price: 79.90,
        displayPrice: 79.90,
        image: "/img/card-images/torta-tropicalia.png",
        description: "Leve e refrescante. Pão de ló de chocolate branco recheado com abacaxi fresco, ovos moles artesanais, chantilly de nata, e finalizado com a textura única do merengão e de um macron de coco.",
        isSummable: false,

        styles: [

            {
                name: "TRADICIONAL",
                image: "/img/card-images/torta-tropicalia.png",
            },

            {
                name:"NAKED",
                image: "/img/card-images/torta-tropicalia-naked.png"
            }
        ],

        sizes: [
            {
                name: "Mini",
                weightDescription: "",
            },

            {
                name: "Pequena",
                weightDescription: "",
            },

            {
                name: "Média",
                weightDescription: "",
            },
        ]
    },

    {
        id:"torta-marta-rocha",
        name: "TORTA MARTA ROCHA",
        measureUnit: "KG",
        type: "staticPrice-multStyle-multSize",
        price: 79.90,
        displayPrice: 79.90,
        image: "/img/card-images/marta-rocha-tradicional.png",
        description: "Um ícone de confeitaria, essa torta combina os sabores do Pão de ló preto e branco com recheios de ovos moles, chantilly de nata, e os texturizados merengão e praline de nozes.",
        isSummable: false,

        styles: [

            {
                name: "TRADICIONAL",
                image: "/img/card-images/marta-rocha-tradicional.png",
            },

            {
                name:"NAKED",
                image: "/img/card-images/torta-marta-rocha-naked.png"
            }
        ],

        sizes: [
            {
                name: "Mini",
                weightDescription: "",
            },

            {
                name: "Pequena",
                weightDescription: "",
            },

            {
                name: "Média",
                weightDescription: "",
            },

            {
                name: "Grande",
                weightDescription: "",
            },

            {
                name: "Família",
                weightDescription: "",
            },
        ]
    },

    //DATA-INTERACTION: "priceByExtra-multStyle-multSize"

    {
        id:"torta-brigadeiro",
        name: "TORTA BRIGADEIRO",
        measureUnit: "KG",
        type: "priceByExtra-multStyle-multSize",
        image: "/img/card-images/torta-brigadeiro-tradicional.jpeg",
        description: "Uma celebração do chocolate preto. Combina um pão de ló fofinho de chocolate com camadas intercaladas de mousse de chocolate intenso e o nosso clássico brigadeiro caseiro.",
        isSummable: false,

        styles: [

            {
                name: "TRADICIONAL",
                image: "/img/card-images/torta-brigadeiro-tradicional.jpeg",
            },

            {
                name:"NAKED",
                image: ""
            }
        ],

        sizes: [
            {
                name: "Mini",
                weightDescription: "",
            },

            {
                name: "Pequena",
                weightDescription: "",
            },

            {
                name: "Média",
                weightDescription: "",
            },

            {
                name: "Grande",
                weightDescription: "",
            },

            {
                name: "Família",
                weightDescription: "",
            },
        ],

        extras: [
            {
                name: "Sem adicional",
                price: 89.90,
                displayPrice: 89.90                
            },

            {
                name: "Morangos",
                price: 0,
                displayPrice: "Consulte valores"
            }
        ]
    },


    {
        id:"torta-dois-amores",
        name: "TORTA DOIS AMORES",
        measureUnit: "KG",
        type: "priceByExtra-multStyle-multSize",
        image: "/img/card-images/torta-brigadeiro-tradicional.jpeg",
        description: "Uma celebração do chocolate preto. Combina um pão de ló fofinho de chocolate com camadas intercaladas de mousse de chocolate intenso e o nosso clássico brigadeiro caseiro.",
        isSummable: false,

        styles: [

            {
                name: "TRADICIONAL",
                image: "/img/card-images/torta-brigadeiro-tradicional.jpeg",
            },

            {
                name:"NAKED",
                image: "/img/card-images/torta-dois-amores-naked.png"
            }
        ],

        sizes: [
            {
                name: "Mini",
                weightDescription: "",
            },

            {
                name: "Pequena",
                weightDescription: "",
            },

            {
                name: "Média",
                weightDescription: "",
            },

            {
                name: "Grande",
                weightDescription: "",
            },

            {
                name: "Família",
                weightDescription: "",
            },
        ],

        extras: [
            {
                name: "Sem adicional",
                price: 89.90,
                displayPrice: 89.90                
            },

            {
                name: "Morangos",
                price: 0,
                displayPrice: "Consulte valores"
            }
        ]
    },


    //DATA-INTERACTION: "staticPriceAndSize-multFlavor"
    { 
        id: "chessecake",
        name: "CHEESECAKE",
        description:"Perfeito para sua celebração! Este cheesecake de 20cm foi feito para impressionar, servindo 10 a 12 fatias muito generosas",
        type: "staticPriceAndSize-multFlavor",
        measureUnit: "UN",
        price: 159.00,
        displayPrice: 159.00,
        image:"/img/card-images/cheesecake-goiabada.jpg",
        isSummable: true,

        flavors : [
            {
                name:"Frutas vermelhas",
                flavorDescription: "Equilíbrio perfeito entre o doce e o cítrico! Base de massa frola, creme suave de cream cheese e uma cobertura vibrante de framboesa, morango e amora.",
                image:"/img/card-images/cheesecake-frutas-vermelhas.webp"
            },

            {
                name: "Goiabada",
                flavorDescription: "O encontro perfeito do queijo com a goiabada. Base de massa frola, creme de cream cheese suave e cobertura generosa de goiabada.",
                image: "/img/card-images/cheesecake-goiabada.jpg",
            }

        ]
    },

    { 
        id: "torta-baixa",
        name: "TORTA BAIXA",
        description:"Uma sobremesa sofisticada. Nossa torta baixa de 20 cm combina uma base crocante com um recheio rico. Serve 10 a 12 fatias generosas, ideal para um café ou após o jantar.",
        type: "staticPriceAndSize-multFlavor",
        measureUnit: "UN",
        price: 149.00,
        displayPrice: 149.00,
        image:"/img/card-images/cheesecake-goiabada.jpg",
        isSummable: true,

        flavors : [
            {
                name:"Holandesa",
                flavorDescription: "Sofisticação em cada camada: base crocante, biscoitos Calipso na lateral, creme especial de chocolate branco com cream cheese e uma cobertura irresistível de ganache de chocolate.",
                image:"/img/card-images/torta-baixa-holandesa.jpg"
            },

            {
                name: "Três Chocolates",
                flavorDescription: "O trio perfeito. Base de bolacha, camadas de mousse de chocolate (meio amargo, ao leite e branco) e finalização com ganache de chocolate.",
                image: "/img/card-images/torta-baixa-3-chocolates.jpg",
            },

            {
                name: "Banoffee",
                flavorDescription: "Doce de leite e banana em perfeita harmonia. Base de bolacha, mousse de doce de leite e o toque final tostado e delicioso da cobertura de glacê maçaricado.",
                image: "",
            },

            {
                name: "Limão",
                flavorDescription: "Frescor em cada fatia. Base de bolacha, mousse de limão cremoso e o toque final sofisticado do glacê maçaricado.",
                image: "/img/card-images/torta-baixa-limao.png",
            },

            {
                name: "Ninho com morango",
                flavorDescription: "O clássico perfeito. Base crocante, creme de Ninho, mousse de chocolate, morangos frescos e uma finalização deliciosa com ganache de chocolate.",
                image: "",
            },

            
            {
                name: "Nozes",
                flavorDescription: "O encontro do doce de leite com as nozes. Base de bolacha, recheio de doce de leite e mousse, praline de nozes crocante e cobertura de ganache de chocolate.",
                image: "",
            },



        ]
    },



];

