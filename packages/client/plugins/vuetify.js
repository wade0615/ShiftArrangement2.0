import Vue from 'vue'
import Vuetify from 'vuetify'
import theme from '@/assets/theme'
Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    light: true,
    themes: {
      light: {
        white: theme.white,
        mainColor: theme.mainColor,
        secondary: '#FFCDD2',
        accent: '#3F51B5',
        primary50: theme.primary50,
        primary100: theme.primary100,
        primary200: theme.primary200,
        primary300: theme.primary300,
        primary400: theme.primary400,
        primary500: theme.primary500,
        primary600: theme.primary600,
        primary700: theme.primary700,
        primary800: theme.primary800,
        primary900: theme.primary900,
        error50: theme.error50,
        error100: theme.error100,
        error200: theme.error200,
        error300: theme.error300,
        error400: theme.error400,
        error500: theme.error500,
        error600: theme.error600,
        error700: theme.error700,
        error800: theme.error800,
        error900: theme.error900,
      },
    },
  },
})
