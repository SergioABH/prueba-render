const db = require("../models/db");

// Métodos para gestionar las operaciones de la base de datos relacionadas con clientes
const clienteController = {
    createCliente: (req, res) => {
        const { nombre, apellido, correo } = req.body;

        db.query(
            'INSERT INTO clientes(nombre, apellido, correo) VALUES (?, ?, ?)',
            [nombre, apellido, correo],
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ error: "Error al crear el cliente" });
                } else {
                    res.status(201).json({ message: "Cliente creado exitosamente", result });
                }
            }
        );
    },

    getClientes: (req, res) => {
        db.query('SELECT * FROM clientes', (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: "Error al obtener la lista de clientes" });
            } else {
                res.status(200).json(result);
            }
        });
    },

    updateCliente: (req, res) => {
        const { id, nombre, apellido, correo } = req.body;

        db.query(
            'UPDATE clientes SET nombre=?, apellido=?, correo=? WHERE id=?',
            [nombre, apellido, correo, id],
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ error: "Error al actualizar el cliente" });
                } else {
                    res.status(200).json({ message: "Cliente actualizado exitosamente", result });
                }
            }
        );
    },

    deleteCliente: (req, res) => {
        const id = req.params.id;

        db.query('DELETE FROM clientes WHERE id=?', id, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: "Error al eliminar el cliente" });
            } else {
                res.status(200).json({ message: "Cliente eliminado exitosamente", result });
            }
        });
    },
};

module.exports = clienteController;
