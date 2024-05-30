// src/dataProvider.js
import supabase from './supabaseClient';

const dataProvider = {
    getList: async (resource, params) => {
        try {
            const { data, error } = await supabase.from(resource).select('*');
            if (error) throw new Error(error.message);
            console.log("getList data:", data);
            return {
                data: data.map(item => ({ ...item, id: item.id || item.id_clientes || item.id_items || item.id_mensajero || item.id_ordenes || item.id_rol || item.id_sede || item.id_usuario })),
                total: data.length,
            };
        } catch (error) {
            console.error("Error in getList:", error);
            throw error;
        }
    },

    getOne: async (resource, params) => {
        try {
            const { data, error } = await supabase.from(resource).select('*').eq('id', params.id).single();
            if (error) throw new Error(error.message);
            console.log("getOne data:", data);
            return { data: { ...data, id: data.id || data.id_clientes || data.id_items || data.id_mensajero || data.id_ordenes || data.id_rol || data.id_sede || data.id_usuario } };
        } catch (error) {
            console.error("Error in getOne:", error);
            throw error;
        }
    },

    create: async (resource, params) => {
        try {
            const { data, error } = await supabase.from(resource).insert([params.data]);
            if (error) throw new Error(error.message);
            console.log("create data:", data);
            return { data: { ...data[0], id: data[0].id || data[0].id_clientes || data[0].id_items || data[0].id_mensajero || data[0].id_ordenes || data[0].id_rol || data[0].id_sede || data[0].id_usuario } };
        } catch (error) {
            console.error("Error in create:", error);
            throw error;
        }
    },

    update: async (resource, params) => {
        try {
            const { data, error } = await supabase.from(resource).update(params.data).eq('id', params.id);
            if (error) throw new Error(error.message);
            console.log("update data:", data);
            return { data: { ...data[0], id: data[0].id || data[0].id_clientes || data[0].id_items || data[0].id_mensajero || data[0].id_ordenes || data[0].id_rol || data[0].id_sede || data[0].id_usuario } };
        } catch (error) {
            console.error("Error in update:", error);
            throw error;
        }
    },

    delete: async (resource, params) => {
        try {
            const { data, error } = await supabase.from(resource).delete().eq('id', params.id);
            if (error) throw new Error(error.message);
            console.log("delete data:", data);
            return { data: { ...data[0], id: data[0].id || data[0].id_clientes || data[0].id_items || data[0].id_mensajero || data[0].id_ordenes || data[0].id_rol || data[0].id_sede || data[0].id_usuario } };
        } catch (error) {
            console.error("Error in delete:", error);
            throw error;
        }
    },
};

export default dataProvider;
