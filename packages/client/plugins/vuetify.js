import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#E53935',
        secondary: '#FFCDD2',
        accent: '#3F51B5',
      },
    },
  },
})

export default vuetify
