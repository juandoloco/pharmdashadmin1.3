// src/roles.js
import React from 'react';
import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const RolList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id_rol" />
            <TextField source="nombre_rol" />
            <TextField source="descripcion" />
        </Datagrid>
    </List>
);

export const RolEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nombre_rol" />
            <TextInput source="descripcion" />
        </SimpleForm>
    </Edit>
);

export const RolCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nombre_rol" />
            <TextInput source="descripcion" />
        </SimpleForm>
    </Create>
);
