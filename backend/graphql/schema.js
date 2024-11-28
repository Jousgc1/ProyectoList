// Importa el constructor para crear esquemas de GraphQL
const { buildSchema } = require('graphql');
// Importa el modelo de datos para las tareas
const Task = require('../models/Task');

// Define el esquema de GraphQL
const schema = buildSchema(`
    type Task {
        id: ID
        title: String
        description: String
        status: String
        createdAt: String
        updatedAt: String
    }

    type Query {
        // Define una consulta para obtener tareas, opcionalmente filtradas por título
        getTasks(title: String): [Task]
    }

    type Mutation {
        // Define una mutación para crear una nueva tarea
        createTask(title: String!, description: String!, status: String): Task
        // Define una mutación para actualizar una tarea existente
        updateTask(id: ID!, title: String, description: String, status: String): Task
        // Define una mutación para eliminar una tarea
        deleteTask(id: ID!): String
    }
`);

// Define los resolvers para las consultas y mutaciones
const root = {
    // Resolver para la consulta getTasks
    getTasks: async ({ title }) => {
        // Si se proporciona un título, crea una consulta de filtro; de lo contrario, consulta todas las tareas
        const query = title ? { title: new RegExp(title, 'i') } : {};
        // Ejecuta la consulta en la base de datos y devuelve los resultados
        return await Task.find(query);
    },
    // Resolver para la mutación createTask
    createTask: async ({ title, description, status }) => {
        // Crea una nueva instancia de Task con los datos proporcionados
        const newTask = new Task({ title, description, status });
        // Guarda la nueva tarea en la base de datos y devuelve el resultado
        return await newTask.save();
    },
    // Resolver para la mutación updateTask
    updateTask: async ({ id, title, description, status }) => {
        // Encuentra la tarea por ID y actualiza sus campos con los datos proporcionados
        return await Task.findByIdAndUpdate(id, { title, description, status }, { new: true });
    },
    // Resolver para la mutación deleteTask
    deleteTask: async ({ id }) => {
        // Encuentra la tarea por ID y la elimina de la base de datos
        await Task.findByIdAndDelete(id);
        // Devuelve un mensaje indicando que la tarea ha sido eliminada
        return 'Task deleted';
    }
};

// Exporta el esquema y los resolvers para que puedan ser utilizados en la configuración de GraphQL
module.exports = { schema, root };
