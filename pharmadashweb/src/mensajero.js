// src/mensajero.js
// src/mensajero.js
import React from 'react';
import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const MensajeroList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id_mensajero" />
            <TextField source="nombre_mensajero" />
            <TextField source="apellido_mensajero" />
            <TextField source="telefono_mensajero" />
            <TextField source="id_sede" />
        </Datagrid>
    </List>
);

export const MensajeroEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nombre_mensajero" />
            <TextInput source="apellido_mensajero" />
            <TextInput source="telefono_mensajero" />
            <TextInput source="id_sede" />
        </SimpleForm>
    </Edit>
);

export const MensajeroCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nombre_mensajero" />
            <TextInput source="apellido_mensajero" />
            <TextInput source="telefono_mensajero" />
            <TextInput source="id_sede" />
        </SimpleForm>
    </Create>
);
