import Vue from 'vue'
import {
  required,
  digits,
  email,
  max,
  min,
  regex,
} from 'vee-validate/dist/rules'
import {
  extend,
  ValidationProvider,
  ValidationObserver,
  setInteractionMode,
} from 'vee-validate'

setInteractionMode('aggressive')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
})

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('min', {
  ...min,
  message: '{_field_} may not be less than {length} characters',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
