import { createApp } from "vue";
/* Importazione del font Montserrat */
import "@fontsource-variable/montserrat";
/* Importazione di Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
/* Import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* Import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* Importazione dell'icona del video e della stella*/
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

/* Aggiunto alla libreria l'icona del video e della stella */
library.add(faVideo, solidStar, regularStar);

import App from "./App.vue";

createApp(App).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
