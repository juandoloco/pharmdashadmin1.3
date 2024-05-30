// src/App.js
import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import { ClienteList, ClienteEdit, ClienteCreate } from './clientes';
import { ItemList, ItemEdit, ItemCreate } from './items';
import { MensajeroList, MensajeroEdit, MensajeroCreate } from './mensajero';
import { OrdenList, OrdenEdit, OrdenCreate } from './ordenes';
import { RolList, RolEdit, RolCreate } from './roles';
import { SedeList, SedeEdit, SedeCreate } from './sede';
import { UsuarioList, UsuarioEdit, UsuarioCreate } from './usuario';

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="clientes" list={ClienteList} edit={ClienteEdit} create={ClienteCreate} />
        <Resource name="items" list={ItemList} edit={ItemEdit} create={ItemCreate} />
        <Resource name="mensajero" list={MensajeroList} edit={MensajeroEdit} create={MensajeroCreate} />
        <Resource name="ordenes" list={OrdenList} edit={OrdenEdit} create={OrdenCreate} />
        <Resource name="roles" list={RolList} edit={RolEdit} create={RolCreate} />
        <Resource name="sede" list={SedeList} edit={SedeEdit} create={SedeCreate} />
        <Resource name="usuario" list={UsuarioList} edit={UsuarioEdit} create={UsuarioCreate} />
    </Admin>
);

export default App;
