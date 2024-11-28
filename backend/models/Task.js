// Importa Mongoose, una biblioteca de modelado de objetos de MongoDB para Node.js
const mongoose = require('mongoose');

// Define un esquema para la colección "Task"
const TaskSchema = new mongoose.Schema({
    // Define el campo "title" que es de tipo String y es obligatorio
    title: { type: String, required: true },
    // Define el campo "description" que es de tipo String y es obligatorio
    description: { type: String, required: true },
    // Define el campo "status" con tres posibles valores y un valor por defecto de "Pendiente"
    status: { type: String, enum: ['Pendiente', 'En Proceso', 'Completada'], default: 'Pendiente' },
    // Define el campo "createdAt" que almacena la fecha de creación con el valor por defecto de la fecha actual
    createdAt: { type: Date, default: Date.now },
    // Define el campo "updatedAt" que almacena la fecha de actualización con el valor por defecto de la fecha actual
    updatedAt: { type: Date, default: Date.now }
});

// Exporta el modelo "Task" basado en el esquema "TaskSchema" para que pueda ser utilizado en otras partes de la aplicación
module.exports = mongoose.model('Task', TaskSchema);
