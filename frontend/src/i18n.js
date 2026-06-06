import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const menuItems = {
  margheritaPizza: {
    en: ["Margherita Pizza", "Classic mozzarella, tomato sauce, and basil."],
    fr: ["Pizza Margherita", "Mozzarella classique, sauce tomate et basilic."],
    es: ["Pizza Margarita", "Mozzarella clasica, salsa de tomate y albahaca."],
    ar: ["بيتزا مارغريتا", "موزاريلا كلاسيكية مع صلصة الطماطم والريحان."],
  },
  pepperoniPizza: {
    en: [
      "Pepperoni Pizza",
      "Beef pepperoni, mozzarella, oregano, and rich tomato sauce.",
    ],
    fr: [
      "Pizza Pepperoni",
      "Pepperoni de boeuf, mozzarella, origan et sauce tomate riche.",
    ],
    es: [
      "Pizza Pepperoni",
      "Pepperoni de ternera, mozzarella, oregano y salsa de tomate.",
    ],
    ar: [
      "بيتزا بيبروني",
      "بيبروني بقري مع موزاريلا وأوريغانو وصلصة طماطم غنية.",
    ],
  },
  vegetarianPizza: {
    en: [
      "Vegetarian Pizza",
      "Colorful peppers, mushrooms, olives, onions, and melted cheese.",
    ],
    fr: [
      "Pizza Vegetarienne",
      "Poivrons, champignons, olives, oignons et fromage fondu.",
    ],
    es: [
      "Pizza Vegetariana",
      "Pimientos, champinones, aceitunas, cebolla y queso fundido.",
    ],
    ar: ["بيتزا نباتية", "فلفل ملون وفطر وزيتون وبصل وجبن ذائب."],
  },
  chickenPizza: {
    en: ["Chicken Pizza", "Grilled chicken, olives, onions, and cheese."],
    fr: ["Pizza Poulet", "Poulet grille, olives, oignons et fromage."],
    es: ["Pizza de Pollo", "Pollo a la parrilla, aceitunas, cebolla y queso."],
    ar: ["بيتزا الدجاج", "دجاج مشوي مع زيتون وبصل وجبن."],
  },
  keftaTacos: {
    en: [
      "Kefta Tacos",
      "Minced beef, fries, cheese sauce, and house seasoning.",
    ],
    fr: [
      "Tacos Kefta",
      "Viande hachee, frites, sauce fromagere et epices maison.",
    ],
    es: [
      "Tacos de Kefta",
      "Carne picada, patatas fritas, salsa de queso y especias.",
    ],
    ar: ["طاكوس كفتة", "لحم مفروم مع بطاطس وصلصة جبن وتوابل المطعم."],
  },
  chickenTacos: {
    en: [
      "Chicken Tacos",
      "Tender chicken, crispy fries, cheese, and Andalouse sauce.",
    ],
    fr: [
      "Tacos Poulet",
      "Poulet tendre, frites croustillantes, fromage et sauce andalouse.",
    ],
    es: [
      "Tacos de Pollo",
      "Pollo tierno, patatas crujientes, queso y salsa andaluza.",
    ],
    ar: ["طاكوس دجاج", "دجاج طري مع بطاطس مقرمشة وجبن وصلصة أندلسية."],
  },
  mixedTacos: {
    en: [
      "Mixed Tacos",
      "Chicken, kefta, fries, cheese sauce, and spicy house sauce.",
    ],
    fr: [
      "Tacos Mixte",
      "Poulet, kefta, frites, sauce fromagere et sauce piquante maison.",
    ],
    es: [
      "Tacos Mixto",
      "Pollo, kefta, patatas, salsa de queso y salsa picante.",
    ],
    ar: ["طاكوس مشكل", "دجاج وكفتة وبطاطس وصلصة جبن وصلصة حارة."],
  },
  seafoodTacos: {
    en: [
      "Seafood Tacos",
      "Shrimp, calamari, fresh vegetables, and creamy garlic sauce.",
    ],
    fr: [
      "Tacos Fruits de Mer",
      "Crevettes, calamars, legumes frais et sauce ail cremeuse.",
    ],
    es: [
      "Tacos de Mariscos",
      "Gambas, calamares, verduras frescas y salsa cremosa de ajo.",
    ],
    ar: ["طاكوس فواكه البحر", "روبيان وكالامار وخضار طازجة وصلصة ثوم كريمية."],
  },
  chickenGratin: {
    en: [
      "Chicken Gratin",
      "Baked pasta with chicken, bechamel, mushrooms, and cheese.",
    ],
    fr: [
      "Gratin Poulet",
      "Pates gratinees au poulet, bechamel, champignons et fromage.",
    ],
    es: [
      "Gratin de Pollo",
      "Pasta al horno con pollo, bechamel, champinones y queso.",
    ],
    ar: ["غراتان الدجاج", "معكرونة بالفرن مع دجاج وبيشاميل وفطر وجبن."],
  },
  seafoodGratin: {
    en: [
      "Seafood Gratin",
      "Seafood, pasta, creamy sauce, herbs, and golden cheese.",
    ],
    fr: [
      "Gratin Fruits de Mer",
      "Fruits de mer, pates, sauce cremeuse, herbes et fromage dore.",
    ],
    es: [
      "Gratin de Mariscos",
      "Mariscos, pasta, salsa cremosa, hierbas y queso dorado.",
    ],
    ar: [
      "غراتان فواكه البحر",
      "فواكه بحر ومعكرونة وصلصة كريمية وأعشاب وجبن محمر.",
    ],
  },
  vegetableGratin: {
    en: [
      "Vegetable Gratin",
      "Seasonal vegetables, bechamel, herbs, and melted cheese.",
    ],
    fr: [
      "Gratin Legumes",
      "Legumes de saison, bechamel, herbes et fromage fondu.",
    ],
    es: [
      "Gratin de Verduras",
      "Verduras de temporada, bechamel, hierbas y queso fundido.",
    ],
    ar: ["غراتان الخضار", "خضار موسمية مع بيشاميل وأعشاب وجبن ذائب."],
  },
  smallBurger: {
    en: [
      "Small Burger",
      "Single beef patty, lettuce, tomato, cheese, and burger sauce.",
    ],
    fr: [
      "Petit Burger",
      "Steak de boeuf, salade, tomate, fromage et sauce burger.",
    ],
    es: [
      "Burger Pequena",
      "Carne de ternera, lechuga, tomate, queso y salsa burger.",
    ],
    ar: ["برغر صغير", "قطعة لحم بقري مع خس وطماطم وجبن وصلصة البرغر."],
  },
  bigBurger: {
    en: [
      "Big Burger",
      "Double beef patty, cheddar, caramelized onions, and special sauce.",
    ],
    fr: [
      "Big Burger",
      "Double steak, cheddar, oignons caramelises et sauce speciale.",
    ],
    es: [
      "Big Burger",
      "Doble carne, cheddar, cebolla caramelizada y salsa especial.",
    ],
    ar: ["برغر كبير", "قطعتا لحم مع شيدر وبصل مكرمل وصلصة خاصة."],
  },
  chickenBurger: {
    en: [
      "Chicken Burger",
      "Crispy chicken, lettuce, cheese, and creamy garlic sauce.",
    ],
    fr: [
      "Burger Poulet",
      "Poulet croustillant, salade, fromage et sauce ail cremeuse.",
    ],
    es: [
      "Burger de Pollo",
      "Pollo crujiente, lechuga, queso y salsa cremosa de ajo.",
    ],
    ar: ["برغر دجاج", "دجاج مقرمش مع خس وجبن وصلصة ثوم كريمية."],
  },
  veggieWrap: {
    en: [
      "Veggie Wrap",
      "Grilled vegetables, fresh salad, hummus, and soft tortilla.",
    ],
    fr: [
      "Wrap Vegetarien",
      "Legumes grilles, salade fraiche, houmous et tortilla moelleuse.",
    ],
    es: [
      "Wrap Vegetariano",
      "Verduras asadas, ensalada fresca, hummus y tortilla suave.",
    ],
    ar: ["راب نباتي", "خضار مشوية وسلطة طازجة وحمص وتورتيلا طرية."],
  },
  falafelPlate: {
    en: ["Falafel Plate", "Falafel, salad, fries, olives, and tahini sauce."],
    fr: [
      "Assiette Falafel",
      "Falafel, salade, frites, olives et sauce tahini.",
    ],
    es: [
      "Plato de Falafel",
      "Falafel, ensalada, patatas, aceitunas y salsa tahini.",
    ],
    ar: ["طبق فلافل", "فلافل وسلطة وبطاطس وزيتون وصلصة طحينة."],
  },
  vegetarianPanini: {
    en: [
      "Vegetarian Panini",
      "Toasted panini with vegetables, cheese, pesto, and olives.",
    ],
    fr: [
      "Panini Vegetarien",
      "Panini grille aux legumes, fromage, pesto et olives.",
    ],
    es: [
      "Panini Vegetariano",
      "Panini tostado con verduras, queso, pesto y aceitunas.",
    ],
    ar: ["بانيني نباتي", "بانيني محمص بالخضار والجبن والبيستو والزيتون."],
  },
  cocaCola: {
    en: ["Coca Cola", "Cold and refreshing drink."],
    fr: ["Coca Cola", "Boisson froide et rafraichissante."],
    es: ["Coca Cola", "Bebida fria y refrescante."],
    ar: ["كوكا كولا", "مشروب بارد ومنعش."],
  },
  orangeJuice: {
    en: ["Orange Juice", "Freshly served orange juice."],
    fr: ["Jus d'orange", "Jus d'orange frais servi minute."],
    es: ["Zumo de Naranja", "Zumo de naranja fresco."],
    ar: ["عصير البرتقال", "عصير برتقال طازج."],
  },
  avocadoJuice: {
    en: [
      "Avocado Juice",
      "Creamy avocado juice with milk and a touch of honey.",
    ],
    fr: ["Jus Avocat", "Jus d'avocat cremeux avec lait et une touche de miel."],
    es: ["Zumo de Aguacate", "Zumo cremoso de aguacate con leche y miel."],
    ar: ["عصير الأفوكادو", "عصير أفوكادو كريمي مع الحليب ولمسة عسل."],
  },
  lemonMint: {
    en: ["Lemon Mint Juice", "Fresh lemon, mint, ice, and light sugar."],
    fr: ["Jus Citron Menthe", "Citron frais, menthe, glacons et sucre leger."],
    es: ["Limonada con Menta", "Limon fresco, menta, hielo y poco azucar."],
    ar: ["عصير ليمون بالنعناع", "ليمون طازج ونعناع وثلج وسكر خفيف."],
  },
  mineralWater: {
    en: ["Mineral Water", "Chilled bottled mineral water."],
    fr: ["Eau Minerale", "Bouteille d'eau minerale fraiche."],
    es: ["Agua Mineral", "Agua mineral embotellada y fria."],
    ar: ["ماء معدني", "قارورة ماء معدني باردة."],
  },
};

const buildMenuTranslations = (language) =>
  Object.fromEntries(
    Object.entries(menuItems).map(([key, values]) => [
      key,
      { name: values[language][0], description: values[language][1] },
    ]),
  );

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        menu: "Menu",
        about: "About",
        contact: "Contact",
        cart: "Cart",
      },
      language: { label: "Language", current: "English" },
      common: {
        addToCart: "Add to cart",
        all: "All",
        loadingMenu: "Loading menu...",
        currency: "MAD",
        total: "Total",
      },
      footer: {
        text: "The best snack pizza in Massa, with fast service and unbeatable prices.",
        navigation: "Navigation",
        contact: "Contact",
        location: "Massa, Morocco",
        takeaway: "Dine-in and takeaway",
        rights: "2026 Snack des Princes - All rights reserved",
      },
      home: {
        badge: "5.0 rating - Massa, Morocco",
        titleA: "The best",
        titleB: "Pizza in Massa",
        subtitle:
          "Authentic flavors, fast service, unbeatable prices. Free fries with pizzas.",
        order: "Order now",
        viewMenu: "View menu",
        customerRating: "Customer rating",
        affordable: "Affordable prices",
        favoritesTag: "Customer favorites",
        bestsellers: "Our bestsellers",
        reviewsTag: "Customer Reviews",
        reviewsTitle: "What our customers say",
      },
      highlights: [
        {
          title: "Fast Service",
          text: "Hot meals prepared quickly for dine-in and takeaway.",
        },
        {
          title: "Affordable",
          text: "Prices from MAD 1 to MAD 50 for every appetite.",
        },
        {
          title: "5.0 Rating",
          text: "Loved by customers for quality and friendly staff.",
        },
      ],
      reviews: [
        {
          name: "Salma A.",
          role: "Local customer",
          text: "Very good pizza, fast service, and fair prices.",
        },
        {
          name: "Omar Berbza.",
          role: "Takeaway regular",
          text: "Tasty pizza and the free fries make it even better.",
        },
        {
          name: "Nora M.",
          role: "Family visit",
          text: "Friendly service, clean place, and generous portions.",
        },
        {
          name: "Adam R.",
          role: "Student",
          text: "The tacos are filling, hot, and perfect after class.",
        },
      ],
      menuPage: {
        titleA: "Our",
        titleB: "Menu",
        subtitle:
          "Discover our artisan pizzas, tacos, burgers, gratins, vegetarian meals, juices, and drinks.",
      },
      categories: {
        pizza: "Pizza",
        tacos: "Tacos",
        gratins: "Gratins",
        burgers: "Burgers",
        vegetarian: "Vegetarian",
        drinks: "Juices & Drinks",
      },
      menu: { items: buildMenuTranslations("en") },
      about: {
        titleA: "Our",
        titleB: "Story",
        subtitle: "A passion for pizza in the heart of Massa",
        headingA: "The",
        headingB: "best",
        headingC: "snack in Massa",
        p1: "Snack des Princes was born from a simple passion: serving tasty pizzas at accessible prices with a warm customer experience.",
        p2: "We are known for generous pizzas, free fries, and quick service for dine-in and takeaway.",
        hours: "Opening hours",
        address: "Address",
        openingHours: [
          "Monday - Thursday: 10:00 - 23:00",
          "Friday - Saturday: 10:00 - 00:00",
          "Sunday: 12:00 - 23:00",
        ],
      },
      contactPage: {
        titleA: "Contact",
        titleB: "us",
        headingA: "Let us",
        headingB: "talk",
        intro: "Order, ask questions, or visit us in Massa.",
        phone: "Phone",
        address: "Address",
        whatsapp: "WhatsApp",
        whatsappText: "Available for orders",
        formTitleA: "Send us a",
        formTitleB: "message",
        name: "Your name",
        namePlaceholder: "Example: Ahmed Alaoui",
        message: "Your message",
        messagePlaceholder: "Your question or order...",
        send: "Send message",
      },
      cartPage: {
        titleA: "My",
        titleB: "Cart",
        items: "Your items",
        empty: "Cart is empty.",
        seeMenu: "See menu",
        checkout: "Checkout",
        fullName: "Full name",
        phone: "Phone",
        address: "Delivery address",
        payment: "Cash on delivery",
        confirm: "Confirm Order (Cash on delivery)",
        whatsapp: "Order on WhatsApp",
        emptyStatus: "Cart is empty.",
        success: "Order placed successfully! We will contact you soon.",
        messagePrefix: "Hello Snack des Princes, I want to order:",
      },
      errors: {
        menu: "Unable to load menu. Please check backend server connection.",
      },
    },
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        menu: "Menu",
        about: "A propos",
        contact: "Contact",
        cart: "Panier",
      },
      language: { label: "Langue", current: "Francais" },
      common: {
        addToCart: "Ajouter",
        all: "Tout",
        loadingMenu: "Chargement du menu...",
        currency: "MAD",
        total: "Total",
      },
      footer: {
        text: "Le meilleur snack pizza de Massa, avec service rapide et prix imbattables.",
        navigation: "Navigation",
        contact: "Contact",
        location: "Massa, Maroc",
        takeaway: "Sur place et a emporter",
        rights: "2026 Snack des Princes - Tous droits reserves",
      },
      home: {
        badge: "Note 5.0 - Massa, Maroc",
        titleA: "La meilleure",
        titleB: "Pizza de Massa",
        subtitle:
          "Saveurs authentiques, service rapide, prix imbattables. Frites offertes avec les pizzas.",
        order: "Commander maintenant",
        viewMenu: "Voir le menu",
        customerRating: "Note clients",
        affordable: "Prix accessibles",
        favoritesTag: "Les Favoris",
        bestsellers: "Nos bestsellers",
        reviewsTag: "Avis Clients",
        reviewsTitle: "Ce que disent nos clients",
      },
      highlights: [
        {
          title: "Service rapide",
          text: "Repas chauds prepares rapidement sur place et a emporter.",
        },
        {
          title: "Accessible",
          text: "Prix de MAD 1 a MAD 50 pour toutes les envies.",
        },
        {
          title: "Note 5.0",
          text: "Apprecie pour la qualite et le service chaleureux.",
        },
      ],
      reviews: [
        {
          name: "Salma A.",
          role: "Cliente locale",
          text: "Tres bonne pizza, service rapide et prix corrects.",
        },
        {
          name: "Omar Berbza.",
          role: "Habitue a emporter",
          text: "Pizza savoureuse, et les frites offertes font plaisir.",
        },
        {
          name: "Nora M.",
          role: "Sortie en famille",
          text: "Service aimable, lieu propre et portions genereuses.",
        },
        {
          name: "Adam R.",
          role: "Etudiant",
          text: "Les tacos sont copieux, chauds et parfaits apres les cours.",
        },
      ],
      menuPage: {
        titleA: "Notre",
        titleB: "Menu",
        subtitle:
          "Decouvrez nos pizzas, tacos, burgers, gratins, plats vegetariens, jus et boissons.",
      },
      categories: {
        pizza: "Pizza",
        tacos: "Tacos",
        gratins: "Gratins",
        burgers: "Burgers",
        vegetarian: "Vegetarien",
        drinks: "Jus & Boissons",
      },
      menu: { items: buildMenuTranslations("fr") },
      about: {
        titleA: "Notre",
        titleB: "Histoire",
        subtitle: "Une passion pour la pizza, au coeur de Massa",
        headingA: "Le",
        headingB: "meilleur",
        headingC: "snack de Massa",
        p1: "Snack des Princes est ne d'une passion simple: offrir des pizzas savoureuses a un prix accessible, avec une experience client chaleureuse.",
        p2: "Nous sommes connus pour nos pizzas genereuses, nos frites offertes et notre service rapide en salle comme a emporter.",
        hours: "Horaires d'ouverture",
        address: "Adresse",
        openingHours: [
          "Lundi - Jeudi: 10:00 - 23:00",
          "Vendredi - Samedi: 10:00 - 00:00",
          "Dimanche: 12:00 - 23:00",
        ],
      },
      contactPage: {
        titleA: "Contactez-",
        titleB: "nous",
        headingA: "Parlons",
        headingB: "ensemble",
        intro: "Commandez, posez vos questions, ou visitez-nous a Massa.",
        phone: "Telephone",
        address: "Adresse",
        whatsapp: "WhatsApp",
        whatsappText: "Disponible pour les commandes",
        formTitleA: "Envoyez-nous un",
        formTitleB: "message",
        name: "Votre nom",
        namePlaceholder: "Ex: Ahmed Alaoui",
        message: "Votre message",
        messagePlaceholder: "Votre question ou commande...",
        send: "Envoyer le message",
      },
      cartPage: {
        titleA: "Mon",
        titleB: "Panier",
        items: "Vos articles",
        empty: "Panier vide.",
        seeMenu: "Voir menu",
        checkout: "Commande",
        fullName: "Nom complet",
        phone: "Telephone",
        address: "Adresse de livraison",
        payment: "Paiement a la livraison",
        confirm: "Confirmer la commande (paiement a la livraison)",
        whatsapp: "Commander sur WhatsApp",
        emptyStatus: "Panier vide.",
        success:
          "Commande envoyee avec succes. Nous vous contacterons bientot.",
        messagePrefix: "Bonjour Snack des Princes, je veux commander:",
      },
      errors: {
        menu: "Impossible de charger le menu. Verifiez la connexion au serveur backend.",
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        menu: "Menu",
        about: "Nosotros",
        contact: "Contacto",
        cart: "Carrito",
      },
      language: { label: "Idioma", current: "Espanol" },
      common: {
        addToCart: "Anadir",
        all: "Todo",
        loadingMenu: "Cargando menu...",
        currency: "MAD",
        total: "Total",
      },
      footer: {
        text: "El mejor snack de pizza en Massa, con servicio rapido y precios imbatibles.",
        navigation: "Navegacion",
        contact: "Contacto",
        location: "Massa, Marruecos",
        takeaway: "Comer aqui y para llevar",
        rights: "2026 Snack des Princes - Todos los derechos reservados",
      },
      home: {
        badge: "Valoracion 5.0 - Massa, Marruecos",
        titleA: "La mejor",
        titleB: "Pizza de Massa",
        subtitle:
          "Sabores autenticos, servicio rapido y precios imbatibles. Patatas gratis con las pizzas.",
        order: "Pedir ahora",
        viewMenu: "Ver menu",
        customerRating: "Valoracion",
        affordable: "Precios accesibles",
        favoritesTag: "Favoritos",
        bestsellers: "Mas vendidos",
        reviewsTag: "Opiniones",
        reviewsTitle: "Que dicen nuestros clientes",
      },
      highlights: [
        {
          title: "Servicio rapido",
          text: "Comidas calientes preparadas rapido para comer aqui o llevar.",
        },
        {
          title: "Accesible",
          text: "Precios de MAD 1 a MAD 50 para todos los gustos.",
        },
        {
          title: "Valoracion 5.0",
          text: "Clientes felices por la calidad y el trato amable.",
        },
      ],
      reviews: [
        {
          name: "Salma A.",
          role: "Cliente local",
          text: "Muy buena pizza, servicio rapido y buenos precios.",
        },
        {
          name: "Omar Berbza.",
          role: "Cliente para llevar",
          text: "Pizza sabrosa y las patatas gratis son un gran detalle.",
        },
        {
          name: "Nora M.",
          role: "Visita familiar",
          text: "Servicio amable, local limpio y raciones generosas.",
        },
        {
          name: "Adam R.",
          role: "Estudiante",
          text: "Los tacos llenan mucho, llegan calientes y saben genial.",
        },
      ],
      menuPage: {
        titleA: "Nuestro",
        titleB: "Menu",
        subtitle:
          "Descubre pizzas, tacos, burgers, gratins, platos vegetarianos, zumos y bebidas.",
      },
      categories: {
        pizza: "Pizza",
        tacos: "Tacos",
        gratins: "Gratins",
        burgers: "Burgers",
        vegetarian: "Vegetariano",
        drinks: "Zumos & Bebidas",
      },
      menu: { items: buildMenuTranslations("es") },
      about: {
        titleA: "Nuestra",
        titleB: "Historia",
        subtitle: "Pasion por la pizza en el corazon de Massa",
        headingA: "El",
        headingB: "mejor",
        headingC: "snack de Massa",
        p1: "Snack des Princes nacio de una pasion sencilla: servir pizzas sabrosas a precios accesibles con una experiencia calida.",
        p2: "Somos conocidos por pizzas generosas, patatas gratis y servicio rapido para comer aqui o llevar.",
        hours: "Horario",
        address: "Direccion",
        openingHours: [
          "Lunes - Jueves: 10:00 - 23:00",
          "Viernes - Sabado: 10:00 - 00:00",
          "Domingo: 12:00 - 23:00",
        ],
      },
      contactPage: {
        titleA: "Contacta con",
        titleB: "nosotros",
        headingA: "Hablemos",
        headingB: "juntos",
        intro: "Haz tu pedido, pregunta o visitanos en Massa.",
        phone: "Telefono",
        address: "Direccion",
        whatsapp: "WhatsApp",
        whatsappText: "Disponible para pedidos",
        formTitleA: "Envianos un",
        formTitleB: "mensaje",
        name: "Tu nombre",
        namePlaceholder: "Ej: Ahmed Alaoui",
        message: "Tu mensaje",
        messagePlaceholder: "Tu pregunta o pedido...",
        send: "Enviar mensaje",
      },
      cartPage: {
        titleA: "Mi",
        titleB: "Carrito",
        items: "Tus articulos",
        empty: "Carrito vacio.",
        seeMenu: "Ver menu",
        checkout: "Finalizar pedido",
        fullName: "Nombre completo",
        phone: "Telefono",
        address: "Direccion de entrega",
        payment: "Pago contra entrega",
        confirm: "Confirmar pedido (pago contra entrega)",
        whatsapp: "Pedir por WhatsApp",
        emptyStatus: "Carrito vacio.",
        success: "Pedido realizado. Te contactaremos pronto.",
        messagePrefix: "Hola Snack des Princes, quiero pedir:",
      },
      errors: {
        menu: "No se pudo cargar el menu. Revisa la conexion con el servidor backend.",
      },
    },
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        menu: "القائمة",
        about: "من نحن",
        contact: "اتصل بنا",
        cart: "السلة",
      },
      language: { label: "اللغة", current: "العربية" },
      common: {
        addToCart: "أضف للسلة",
        all: "الكل",
        loadingMenu: "جاري تحميل القائمة...",
        currency: "درهم",
        total: "المجموع",
      },
      footer: {
        text: "أفضل سناك بيتزا في ماسة، بخدمة سريعة وأسعار مناسبة.",
        navigation: "التنقل",
        contact: "اتصال",
        location: "ماسة، المغرب",
        takeaway: "في المطعم أو للطلبات الخارجية",
        rights: "2026 Snack des Princes - جميع الحقوق محفوظة",
      },
      home: {
        badge: "تقييم 5.0 - ماسة، المغرب",
        titleA: "أفضل",
        titleB: "بيتزا في ماسة",
        subtitle:
          "نكهات أصلية، خدمة سريعة، وأسعار مناسبة. بطاطس مجانية مع البيتزا.",
        order: "اطلب الآن",
        viewMenu: "عرض القائمة",
        customerRating: "تقييم الزبناء",
        affordable: "أسعار مناسبة",
        favoritesTag: "المفضلات",
        bestsellers: "الأكثر طلبا",
        reviewsTag: "آراء الزبناء",
        reviewsTitle: "ماذا يقول زبناؤنا",
      },
      highlights: [
        {
          title: "خدمة سريعة",
          text: "وجبات ساخنة تحضر بسرعة للأكل في المطعم أو للطلبات الخارجية.",
        },
        { title: "أسعار مناسبة", text: "أسعار من 1 إلى 50 درهما لكل الأذواق." },
        { title: "تقييم 5.0", text: "محبوبون بفضل الجودة والمعاملة الودية." },
      ],
      reviews: [
        {
          name: "سلمى أ.",
          role: "زبونة من المنطقة",
          text: "بيتزا ممتازة، خدمة سريعة، وأسعار مناسبة.",
        },
        {
          name: "عمر بربزا.",
          role: "زبون طلبات خارجية",
          text: "بيتزا لذيذة والبطاطس المجانية إضافة رائعة.",
        },
        {
          name: "نورة م.",
          role: "زيارة عائلية",
          text: "خدمة لطيفة، مكان نظيف، وحصص سخية.",
        },
        {
          name: "آدم ر.",
          role: "طالب",
          text: "الطاكوس مشبع وساخن ومثالي بعد الدراسة.",
        },
      ],
      menuPage: {
        titleA: "قائمتنا",
        titleB: "",
        subtitle:
          "اكتشف البيتزا والطاكوس والبرغر والغراتان والوجبات النباتية والعصائر والمشروبات.",
      },
      categories: {
        pizza: "بيتزا",
        tacos: "طاكوس",
        gratins: "غراتان",
        burgers: "برغر",
        vegetarian: "نباتي",
        drinks: "عصائر ومشروبات",
      },
      menu: { items: buildMenuTranslations("ar") },
      about: {
        titleA: "قصتنا",
        titleB: "",
        subtitle: "شغف بالبيتزا في قلب ماسة",
        headingA: "أفضل",
        headingB: "سناك",
        headingC: "في ماسة",
        p1: "ولد Snack des Princes من شغف بسيط: تقديم بيتزا لذيذة بأسعار مناسبة وتجربة زبون دافئة.",
        p2: "نشتهر بالبيتزا السخية والبطاطس المجانية والخدمة السريعة في المطعم أو للطلبات الخارجية.",
        hours: "أوقات العمل",
        address: "العنوان",
        openingHours: [
          "الاثنين - الخميس: 10:00 - 23:00",
          "الجمعة - السبت: 10:00 - 00:00",
          "الأحد: 12:00 - 23:00",
        ],
      },
      contactPage: {
        titleA: "اتصل",
        titleB: "بنا",
        headingA: "لنتحدث",
        headingB: "معا",
        intro: "اطلب، اطرح أسئلتك، أو زرنا في ماسة.",
        phone: "الهاتف",
        address: "العنوان",
        whatsapp: "واتساب",
        whatsappText: "متاح للطلبات",
        formTitleA: "أرسل لنا",
        formTitleB: "رسالة",
        name: "اسمك",
        namePlaceholder: "مثال: أحمد العلوي",
        message: "رسالتك",
        messagePlaceholder: "سؤالك أو طلبك...",
        send: "إرسال الرسالة",
      },
      cartPage: {
        titleA: "سلتي",
        titleB: "",
        items: "طلباتك",
        empty: "السلة فارغة.",
        seeMenu: "عرض القائمة",
        checkout: "تأكيد الطلب",
        fullName: "الاسم الكامل",
        phone: "الهاتف",
        address: "عنوان التوصيل",
        payment: "الدفع عند الاستلام",
        confirm: "تأكيد الطلب (الدفع عند الاستلام)",
        whatsapp: "اطلب عبر واتساب",
        emptyStatus: "السلة فارغة.",
        success: "تم إرسال الطلب بنجاح. سنتصل بك قريبا.",
        messagePrefix: "مرحبا Snack des Princes، أريد طلب:",
      },
      errors: { menu: "تعذر تحميل القائمة. يرجى التحقق من اتصال الخادم." },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("snackLanguage") || "fr",
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("snackLanguage", lng);
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
});

document.documentElement.lang = i18n.language;
document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

export default i18n;
