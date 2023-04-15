import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale:'en',
  messages:{
    en:{
      "Product Name":'User',
      "clickme":'Click me!'
    },
    es:{
      "username":'Usuario',
      "clickme":'¡Haz click!'
    },
  }
})

export  default  i18n;