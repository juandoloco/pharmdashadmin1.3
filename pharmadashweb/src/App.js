// src/App.js
import * as React from 'react';
import { Admin, Resource, AppBar, UserMenu, MenuItemLink, Layout } from 'react-admin';
import dataProvider from './dataProvider';
import i18nProvider from './i18nProvider';
import authProvider from './authProvider';
import LoginPage from './LoginPage';
import { ClienteList, ClienteEdit, ClienteCreate } from './clientes';
import { ItemList, ItemEdit, ItemCreate } from './items';
import { MensajeroList, MensajeroEdit, MensajeroCreate } from './mensajero';
import { OrdenList, OrdenEdit, OrdenCreate } from './ordenes';
import { RolList, RolEdit, RolCreate } from './roles';
import { SedeList, SedeEdit, SedeCreate } from './sede';
import { UsuarioList, UsuarioEdit, UsuarioCreate } from './usuario';
import { useTranslate, useLocale } from 'react-admin';
import { useState } from 'react';

// Importar iconos de Material-UI
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import UserIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';

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
            loginPage={LoginPage}
        >
            <Resource name="clientes" list={ClienteList} edit={ClienteEdit} create={ClienteCreate} icon={PeopleIcon} />
            <Resource name="items" list={ItemList} edit={ItemEdit} create={ItemCreate} icon={InventoryIcon} />
            <Resource name="mensajero" list={MensajeroList} edit={MensajeroEdit} create={MensajeroCreate} icon={LocalShippingIcon} />
            <Resource name="ordenes" list={OrdenList} edit={OrdenEdit} create={OrdenCreate} icon={ShoppingCartIcon} />
            <Resource name="roles" list={RolList} edit={RolEdit} create={RolCreate} icon={WorkIcon} />
            <Resource name="sede" list={SedeList} edit={SedeEdit} create={SedeCreate} icon={BusinessIcon} />
            <Resource name="usuario" list={UsuarioList} edit={UsuarioEdit} create={UsuarioCreate} icon={UserIcon} />
        </Admin>
    );
};

export default App;
