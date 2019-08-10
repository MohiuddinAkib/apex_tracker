import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';

Vue.component('font-awesome-icon', FontAwesomeIcon); // Register component globally
library.add(fas, faChevronLeft); // Include needed icons

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa'
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        background: '#903036'
      }
    }
  }
});
