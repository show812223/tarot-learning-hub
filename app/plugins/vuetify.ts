import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'tarotDark',
      themes: {
        tarotDark: {
          dark: true,
          colors: {
            background: '#0a0a14',
            surface: '#1a1a2e',
            'surface-variant': '#12121f',
            primary: '#c9a84c',
            'primary-darken-1': '#a88a3a',
            secondary: '#9b59b6',
            accent: '#c9a84c',
            error: '#e74c3c',
            info: '#3498db',
            success: '#27ae60',
            warning: '#f39c12',
            'on-background': '#e8e6f0',
            'on-surface': '#e8e6f0',
          },
        },
      },
    },
    defaults: {
      VBtn: {
        variant: 'flat',
        rounded: 'lg',
      },
      VCard: {
        rounded: 'lg',
        elevation: 0,
      },
      VChip: {
        rounded: 'lg',
      },
      VTextField: {
        variant: 'outlined',
        density: 'comfortable',
        rounded: 'lg',
      },
    },
  });

  app.vueApp.use(vuetify);
});
