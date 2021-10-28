import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
  theme: {
    themes: {
      dark: {
        primary: "#ffd100",
      },
      light: {
        primary: "#2cd3a1",
        warning: "#673AB7",
      },
    },
  },
  options: {
    customProperties: true,
  },
});
