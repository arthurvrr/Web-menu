



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
        basePrice: 1.80,
        image:"/img/card-images/bolinha-queijo.jpg",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },


    {
        id: "coxinha-frango",
        name: "COXINHA",
        category: "salgados",
        basePrice: 1.60,
        image:"/img/card-images/coxinha-frango.webp",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },


    {
        id: "croquete-carne",
        name: "CROQUETE CARNE",
        category: "salgados",
        basePrice: 1.80,
        image:"/img/card-images/croquete-de-carne.jpg",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },


    {
        id: "enroladinho-frito",
        name: "ENROLADINHO FRITO",
        category: "salgados",
        basePrice: 1.60,
        image:"/img/card-images/enroladinho-frito.jpg",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },


    {
        id: "folhadinho-salsicha",
        name: "FOLHADINHO DE SALSICHA",
        category: "salgados",
        basePrice: 1.80,
        image:"/img/card-images/folhadinho-salsicha.png",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },


    {
        id: "doguinho-salsicha",
        name: "DOGUINHO",
        category: "salgados",
        basePrice: 1.80,
        image:"/img/card-images/doguinho-salsicha.png",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },


    {
        id: "prensadinho",
        name: "PRENSADINHO",
        category: "salgados",
        basePrice: 2.60,
        image:"/img/card-images/sanduiche-prensadinho.png",
        type: "staticPriceAndSize",
        description: "Aproximadamente 40 gramas",
        measureUnit: "UN"
    },


    {
        id: "cachorro-quente",
        name: "CACHORRO QUENTE",
        category: "salgados",
        basePrice: 2.50,
        image:"/img/card-images/cachorro-quente.jpg",
        type: "staticPriceAndSize",
        description: "Pãozinho fofinho com suculento recheio de salsicha picada ao molho de tomate, temperado com alho, cebola e um toque de salsa. Aprox. 40g por unidade.",
        measureUnit: "UN"
    },

    // DATA-INTERACTION = "simpleFlavorAndSize"
    {
        id: "risoles",
        name: "RISOLES",
        category: "salgados",
        basePrice: 1.60,
        image:"/img/card-images/risoles.png",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
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
        basePrice: 2.00,
        image:"/img/card-images/pastel-pastelina.jpg",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
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
        basePrice: 2.30,
        image:"/img/card-images/empadinha-assada.avif",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
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
        basePrice: 1.80,
        image:"/img/card-images/pastelzinho-forno.jpg",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
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
        basePrice: 2.80,
        image:"/img/card-images/canape.jpg",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
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
        basePrice: 2.80,
        image:"/img/card-images/mini-quiche.jpg",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN",
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
        basePrice: 2.80,
        image:"/img/card-images/mini-pizza.png",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 50 gramas",
        measureUnit: "UN",
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
        basePrice: 2.80,
        image:"/img/card-images/barquete.png",
        type: "simpleFlavorAndSize",
        description: "Aproximadamente 50 gramas",
        measureUnit: "UN",
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


    // DATA-INTERACTION = "priceBySize-simpleFlavor"
    {
        id: "quindim",
        name: "QUINDIM",
        type: "priceBySize-simpleFlavor",
        measureUnit: "UN",
        category: "salgado",
        size:[
            {   
                name: "MINI",
                weightDescription: "",
                price: 2.90,
                image: "/img/card-images/quindim-mini.webp"
            },

            {
                name: "TRADICIONAL",
                weightDescription: "",
                price: 4.50,
                image: "/img/card-images/quindim-tradicional.jpg"
            }
        ]
    },

    // DATA-INTERACTION = "priceByFlavor-doubleSize"
    {
        id:"mini-hamburguer",
        name: "MINI HAMBURGUER",
        category: "salgados",
        image:"/img/card-images/mini-hamburguer.webp",
        type: "priceByFlavor-doubleSize",
        description: "Aproximadamente 90 gramas",
        measureUnit: "UN",
        flavors : [
            {   
                name: "Tradicional",
                flavorDescription:  "",
                flavorPrice: 5.00
            },

            {
                name: "Cheddar",
                flavorDescription: "",
                flavorPrice: 5.00
            },

            {
                name: "Vegetariano",
                flavorDescription: "",
                flavorPrice: 3.50
            }
        ]
    },

    // DATA-INTERACTION = "priceBySize-MultFlavor"
    {
        id:"torta-quiche",
        name: "TORTA QUICHE",
        category: "salgados",
        type: "priceBySize-MultFlavor",
        image: "/img/card-images/quiche-pequeno.jpg",
        measureUnit: "UN",
        size : [
            {
                name: "PEQUENO",
                price: 90.00,
                weightDescription: "Com ??, nossa quiche é extremamente bem servida. Rende 6 fatias, perfeitas para compartilhar (ou não!).",
                image:"/img/card-images/quiche-pequeno.jpg",
            },

            {
                name: "GRANDE",
                price: 140.00,
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
        basePrice: 59.90,
        measureUnit: "KG",
        
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
        size: [

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
                price: 88.00
            },

            {
                name: "Frios",
                flavorDescription: "Pão macio, presunto e queijo envolvidos em nosso creme suave (maionese e creme de leite) e cenoura. Finalizada com picles, trazendo um toque especial e marcante.",
                price: 88.00
            },

            {
                name: "Atum",
                flavorDescription: "Pão macio, atum e queijo envolvidos em nosso creme suave (maionese e creme de leite) e cenoura. Finalizada com picles, trazendo um toque especial e marcante",
                price: 98.00
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
        basePrice: 1.70,
        image:"",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },

    {
        id: "brigadeiro-branco",
        name: "BRANQUINHO",
        category: "doces",
        basePrice: 1.70,
        image:"",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },


    {
        id: "beijinho",
        name: "BEIJINHO",
        category: "doces",
        basePrice: 1.70,
        image:"",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },


    {
        id: "docinho-amendoim",
        name: "AMENDOIM",
        category: "doces",
        basePrice: 1.70,
        image:"",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },


    {
        id: "doce-de-leite",
        name: "DOCE DE LEITE",
        category: "doces",
        basePrice: 1.70,
        image:"",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },


    {
        id: "docinho-nozes",
        name: "NOZES",
        category: "doces",
        basePrice: 2.00,
        image:"",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },


    {
        id: "olho-sogra",
        name: "OLHO DE SOGRA",
        category: "doces",
        basePrice: 2.00,
        image:"",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },


    {
        id: "ninho-nutella",
        name: "NINHO & NUTELLA",
        category: "doces",
        basePrice: 2.20,
        image:"",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },


    {
        id: "camafeu-nozes",
        name: "CAMAFEU",
        category: "doces",
        basePrice: 2.90,
        image:"",
        type: "staticPriceAndSize",
        description: "Aproximadamente 20 gramas",
        measureUnit: "UN"
    },

    // DATA-INTERACTION = "priceBySize-multFlavor"
    {
        id: "cupcake",
        name: "CUPCAKE",
        image: "/img/card-images/cupcake-tradicional.webp",
        type: "priceBySize-multFlavor",
        measureUnit: "UN",
        size: [

            {
                name: "MINI",
                weightDescription:"Pesa aproximadamente TANTAS GRAMAS",
                price: 88.00
            },

            {
                name: "TRADICIONAL",
                weightDescription:"Pesa aproximadamente TANTAS GRAMAS",
                price: 88.00
            }


        ],

        flavors : [

            {
                name: "Frango",
                flavorDescription:"Pão macio, frango cremoso (maionese e creme de leite), queijo e cenoura. Finalizada com picles, trazendo um toque especial e refrescante.",
                price: 88.00
            },

            {
                name: "Frios",
                flavorDescription: "Pão macio, presunto e queijo envolvidos em nosso creme suave (maionese e creme de leite) e cenoura. Finalizada com picles, trazendo um toque especial e marcante.",
                price: 88.00
            },

            {
                name: "Atum",
                flavorDescription: "Pão macio, atum e queijo envolvidos em nosso creme suave (maionese e creme de leite) e cenoura. Finalizada com picles, trazendo um toque especial e marcante",
                price: 98.00
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
        flavorDescription:"Base de bolo macron de coco queimado, recheada com ovos moles e um toque azedo de polpa de ameixa. Uma combinação perfeitamente equilibrada.",
        
        size: [
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

    }



];

