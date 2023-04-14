import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale:'es',
    messages:{
        en:{
            "libraryUpc": 'Library UPC',
            "addTutorial": 'Add Tutorial',
            "code":'Code :',
            "validate": 'validate',
            "name":'Name :',
            "productName": "Product Name",
            "quantity": 'Quantity :',
            "dateAdded": "Date Added :",
            "description": "Description :",
            "digitalVersion": "Digital version",
            "status": 'Status :',
            "active": 'Active',
            "suspended" : 'Suspended',
            "inactive": 'Inactive',
            "save": 'Save',
            "cancel": 'Cancel'
        },
        es:{
            "libraryUpc": 'Biblioteca UPC',
            "addTutorial": 'Agregar nuevo tutorial',
            "code":'Código',
            "validate": 'validar',
            "name":'Nombre:',
            "productName": "Nombre del tutorial",
            "quantity": 'Cantidad :',
            "dateAdded": "Fecha de lanzamiento :",
            "description": "Descripción :",
            "digitalVersion": "Versión digital",
            "status": 'Estado :',
            "active": 'Activo',
            "suspended" : 'Suspendido',
            "inactive": 'Inactivo',
            "save": 'Guardar',
            "cancel": 'Cancelar'
        }
    }
})

export  default  i18n;