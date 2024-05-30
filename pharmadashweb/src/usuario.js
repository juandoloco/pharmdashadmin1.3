// src/usuario.js
import React from 'react';
import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const UsuarioList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id_usuario" />
            <TextField source="nombre" />
            <TextField source="apellido" />
            <TextField source="usuario" />
            <TextField source="contrasenia" />
            <TextField source="id_rol" />
        </Datagrid>
    </List>
);

export const UsuarioEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nombre" />
            <TextInput source="apellido" />
            <TextInput source="usuario" />
            <TextInput source="contrasenia" />
            <TextInput source="id_rol" />
        </SimpleForm>
    </Edit>
);

export const UsuarioCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nombre" />
            <TextInput source="apellido" />
            <TextInput source="usuario" />
            <TextInput source="contrasenia" />
            <TextInput source="id_rol" />
        </SimpleForm>
    </Create>
);
