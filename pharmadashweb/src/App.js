// src/App.js
import * as React from 'react';
import { Admin, Resource, AppBar, UserMenu, MenuItemLink, Layout } from 'react-admin';
import dataProvider from './dataProvider';
import i18nProvider from './i18nProvider';
import authProvider from './authProvider';
import LoginPage from './LoginPage'; // Importa la página de login personalizada
import { ClienteList, ClienteEdit, ClienteCreate } from './clientes';
import { ItemList, ItemEdit, ItemCreate } from './items';
import { MensajeroList, MensajeroEdit, MensajeroCreate } from './mensajero';
import { OrdenList, OrdenEdit, OrdenCreate } from './ordenes';
import { RolList, RolEdit, RolCreate } from './roles';
import { SedeList, SedeEdit, SedeCreate } from './sede';
import { UsuarioList, UsuarioEdit, UsuarioCreate } from './usuario';
import { useTranslate, useLocale } from 'react-admin';
import { useState } from 'react';

const CustomUserMenu = ({ onLocaleChange }) => {
    const translate = useTranslate();
    const locale = useLocale();

    return (
        <UserMenu>
            <MenuItemLink
                to="/"
                primaryText={translate('pos.language.english')}
                onClick={() => onLocaleChange('en')}
                selected={locale === 'en'}
            />
            <MenuItemLink
                to="/"
                primaryText={translate('pos.language.spanish')}
                onClick={() => onLocaleChange('es')}
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
            authProvider={authProvider}
            locale={locale}
            onLocaleChange={setLocale}
            layout={CustomLayout}
            loginPage={LoginPage} // Especifica la página de login personalizada
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
