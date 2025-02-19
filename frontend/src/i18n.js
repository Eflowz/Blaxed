import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to our website",
      "home": "Home",
      "flower": "Flower",
      "changeLocation": "Change Location:",
      "changeLanguage": "Change Language:",
      "bestSellers": "OUR BEST SELLERS",
      "bodRelaxers": "BOD RELAXERS",
      "shopNow": "SHOP NOW",
      "typewriterText": "This product is intended for use only by adults 21 years of age or older. Keep these products out of reach of children and pets. Your health and well-being are a priority, so please consume responsibly. Be aware that there may be health risks associated with the consumption of these products. In case of accidental ingestion or overconsumption, immediately contact the National Poison Control Center Hotline at 1-800-222-1222 or call 9-1-1.",
      "best_sellers": "Best Sellers",
  "experience_best_shop_picks": "Experience the best, shop our top picks."
    },
  },
  es: {
    translation: {
      "welcome": "Bienvenido a nuestro sitio web",
      "home": "Inicio",
      "flower": "Flor",
      "changeLocation": "Cambiar Ubicación:",
      "changeLanguage": "Cambiar Idioma:",
      "bestSellers": "NUESTROS MÁS VENDIDOS",
      "bodRelaxers": "RELAJANTES CORPORALES",
      "shopNow": "COMPRA AHORA",
      "typewriterText": "Este producto está destinado únicamente al uso de adultos mayores de 21 años. Mantenga estos productos fuera del alcance de los niños y mascotas. Su salud y bienestar son una prioridad, así que consuma con responsabilidad. Tenga en cuenta que puede haber riesgos para la salud asociados con el consumo de estos productos. En caso de ingestión accidental o consumo excesivo, comuníquese de inmediato con el Centro Nacional de Control de Envenenamientos al 1-800-222-1222 o llame al 9-1-1.",
      "best_sellers": "Más Vendidos",
  "experience_best_shop_picks": "Experimenta lo mejor, compra nuestras mejores selecciones."
    },
  },
  fr: {
    translation: {
      "welcome": "Bienvenue sur notre site web",
      "home": "Accueil",
      "flower": "Fleur",
      "changeLocation": "Changer de lieu :",
      "changeLanguage": "Changer de langue :",
      "bestSellers": "NOS MEILLEURES VENTES",
      "bodRelaxers": "RELAXANTS CORPORELLES",
      "shopNow": "ACHETEZ MAINTENANT",
      "typewriterText": "Ce produit est destiné uniquement à l'usage des adultes de 21 ans et plus. Gardez ces produits hors de portée des enfants et des animaux domestiques. Votre santé et votre bien-être sont une priorité, alors consommez de manière responsable. Sachez qu'il peut y avoir des risques pour la santé associés à la consommation de ces produits. En cas d'ingestion accidentelle ou de surconsommation, contactez immédiatement la ligne d'assistance du Centre national antipoison au 1-800-222-1222 ou appelez le 9-1-1.",
      "best_sellers": "Meilleures Ventes",
      "experience_best_shop_picks": "Découvrez le meilleur, achetez nos meilleurs choix."
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

