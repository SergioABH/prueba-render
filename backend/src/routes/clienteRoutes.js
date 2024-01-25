const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Operaciones relacionadas con clientes
 */

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Añadir un cliente
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               correo:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Cliente creado exitosamente
 *       '500':
 *         description: Error al crear el cliente
 */
router.post("/create", clienteController.createCliente);

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Ver la lista de clientes
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '500':
 *         description: Error al obtener la lista de clientes
 */
router.get("/clientes", clienteController.getClientes);

/**
 * @swagger
 * /update:
 *   put:
 *     summary: Actualizar datos de un cliente
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               correo:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Cliente actualizado exitosamente
 *       '500':
 *         description: Error al actualizar el cliente
 */
router.put("/update", clienteController.updateCliente);

/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *     summary: Eliminar un cliente por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Cliente eliminado exitosamente
 *       '500':
 *         description: Error al eliminar el cliente
 */
router.delete("/delete/:id", clienteController.deleteCliente);

module.exports = router;
