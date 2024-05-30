// src/i18nProvider.js
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';
import spanishMessages from 'ra-language-spanish';

const customSpanishMessages = {
    ...spanishMessages,
    resources: {
        clientes: {
            name: 'Cliente |||| Clientes',
            fields: {
                id_clientes: 'ID',
                cedula: 'Cédula',
                apellidos: 'Apellidos',
                nombre: 'Nombre',
                telefono: 'Teléfono',
                direccion: 'Dirección',
            },
        },
        items: {
            name: 'Item |||| Items',
            fields: {
                id_items: 'ID',
                nombre: 'Nombre',
                precio: 'Precio',
                cantidad: 'Cantidad',
            },
        },
        mensajero: {
            name: 'Mensajero |||| Mensajeros',
            fields: {
                id_mensajero: 'ID',
                nombre_mensajero: 'Nombre del Mensajero',
                apellido_mensajero: 'Apellido del Mensajero',
                telefono_mensajero: 'Teléfono del Mensajero',
                id_sede: 'ID de la Sede',
            },
        },
        ordenes: {
            name: 'Orden |||| Ordenes',
            fields: {
                id_ordenes: 'ID',
                id_clientes: 'ID del Cliente',
                id_item: 'ID del Item',
                id_sede: 'ID de la Sede',
                estado: 'Estado',
                fecha_creacion: 'Fecha de Creación',
            },
        },
        roles: {
            name: 'Rol |||| Roles',
            fields: {
                id_rol: 'ID',
                nombre_rol: 'Nombre del Rol',
                descripcion: 'Descripción',
            },
        },
        sede: {
            name: 'Sede |||| Sedes',
            fields: {
                id_sede: 'ID',
                nombre_sede: 'Nombre de la Sede',
                direccion: 'Dirección',
                telefono: 'Teléfono',
            },
        },
        usuario: {
            name: 'Usuario |||| Usuarios',
            fields: {
                id_usuario: 'ID',
                nombre: 'Nombre',
                apellido: 'Apellido',
                usuario: 'Usuario',
                contrasenia: 'Contraseña',
                id_rol: 'ID del Rol',
            },
        },
    },
};

const messages = {
    en: englishMessages,
    es: customSpanishMessages,
};

const i18nProvider = polyglotI18nProvider(locale => messages[locale] || messages.en, 'en');

export default i18nProvider;
