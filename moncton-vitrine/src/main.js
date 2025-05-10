import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import '@splidejs/vue-splide/css';

import { createI18n } from 'vue-i18n';
import pt from './locales/pt';
import en from './locales/en';

const i18n = createI18n({
  locale: 'pt', // Idioma padrão
  fallbackLocale: 'pt', // Idioma de fallback
  messages: {
    pt,
    en
  }
});

createApp(App).use(i18n).mount('#app')


