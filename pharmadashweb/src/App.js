// src/App.js
import * as React from 'react';
import { Admin, Resource, AppBar, UserMenu, MenuItemLink, Layout } from 'react-admin';
import dataProvider from './dataProvider';
import i18nProvider from './i18nProvider'; // Asegúrate de que esté en mayúscula P
import { ClienteList, ClienteEdit, ClienteCreate } from './clientes';
import { ItemList, ItemEdit, ItemCreate } from './items';
import { MensajeroList, MensajeroEdit, MensajeroCreate } from './mensajero';
import { OrdenList, OrdenEdit, OrdenCreate } from './ordenes';
import { RolList, RolEdit, RolCreate } from './roles';
import { SedeList, SedeEdit, SedeCreate } from './sede';
import { UsuarioList, UsuarioEdit, UsuarioCreate } from './usuario';
import { useTranslate, useLocale } from 'react-admin';
import { useState } from 'react';

const CustomUserMenu = props => {
    const translate = useTranslate();
    const locale = useLocale();

    return (
        <UserMenu {...props}>
            <MenuItemLink
                to="/"
                primaryText={translate('pos.language.english')}
                onClick={() => props.onLocaleChange('en')}
                selected={locale === 'en'}
            />
            <MenuItemLink
                to="/"
                primaryText={translate('pos.language.spanish')}
                onClick={() => props.onLocaleChange('es')}
                selected={locale === 'es'}
            />
        </UserMenu>
    );
};

const CustomAppBar = props => (
    <AppBar {...props} userMenu={<CustomUserMenu onLocaleChange={props.onLocaleChange} />} />
);

const CustomLayout = props => (
    <Layout {...props} appBar={CustomAppBar} />
);

const App = () => {
    const [locale, setLocale] = useState('en');

    return (
        <Admin
            dataProvider={dataProvider}
            i18nProvider={i18nProvider}
            locale={locale}
            onLocaleChange={setLocale}
            layout={CustomLayout}
        >
            <Resource name="clientes" list={ClienteList} edit={ClienteEdit} create={ClienteCreate} />
            <Resource name="items" list={ItemList} edit={ItemEdit} create={ItemCreate} />
            <Resource name="mensajero" list={MensajeroList} edit={MensajeroEdit} create={MensajeroCreate} />
            <Resource name="ordenes" list={OrdenList} edit={OrdenEdit} create={OrdenCreate} />
            <Resource name="roles" list={RolList} edit={RolEdit} create={RolCreate} />
            <Resource name="sede" list={SedeList} edit={SedeEdit} create={SedeCreate} />
            <Resource name="usuario" list={UsuarioList} edit={UsuarioEdit} create={UsuarioCreate} />
        </Admin>
    );
};

export default App;
