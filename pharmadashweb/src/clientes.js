// src/clientes.js
import React from 'react';
import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const ClienteList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id_clientes" />
            <TextField source="cedula" />
            <TextField source="apellidos" />
            <TextField source="nombre" />
            <TextField source="telefono" />
            <TextField source="direccion" />
        </Datagrid>
    </List>
);

export const ClienteEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="cedula" />
            <TextInput source="apellidos" />
            <TextInput source="nombre" />
            <TextInput source="telefono" />
            <TextInput source="direccion" />
        </SimpleForm>
    </Edit>
);

export const ClienteCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="cedula" />
            <TextInput source="apellidos" />
            <TextInput source="nombre" />
            <TextInput source="telefono" />
            <TextInput source="direccion" />
        </SimpleForm>
    </Create>
);
