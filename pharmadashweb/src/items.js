// src/items.js
import React from 'react';
import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, NumberInput, Create } from 'react-admin';

export const ItemList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id_items" />
            <TextField source="nombre" />
            <TextField source="precio" />
            <TextField source="cantidad" />
        </Datagrid>
    </List>
);

export const ItemEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nombre" />
            <NumberInput source="precio" />
            <NumberInput source="cantidad" />
        </SimpleForm>
    </Edit>
);

export const ItemCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nombre" />
            <NumberInput source="precio" />
            <NumberInput source="cantidad" />
        </SimpleForm>
    </Create>
);
