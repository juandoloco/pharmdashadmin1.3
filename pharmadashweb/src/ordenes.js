
import React from 'react';
import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, DateInput, Create } from 'react-admin';

export const OrdenList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id_ordenes" />
            <TextField source="id_clientes" />
            <TextField source="id_item" />
            <TextField source="id_sede" />
            <TextField source="estado" />
            <TextField source="fecha_creacion" />
        </Datagrid>
    </List>
);

export const OrdenEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id_clientes" />
            <TextInput source="id_item" />
            <TextInput source="id_sede" />
            <TextInput source="estado" />
            <DateInput source="fecha_creacion" />
        </SimpleForm>
    </Edit>
);

export const OrdenCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id_clientes" />
            <TextInput source="id_item" />
            <TextInput source="id_sede" />
            <TextInput source="estado" />
            <DateInput source="fecha_creacion" />
        </SimpleForm>
    </Create>
);
