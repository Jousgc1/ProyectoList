<template>
  <div>
    <!-- Campo de entrada para buscar tareas -->
    <input v-model="title" placeholder="Buscar tareas" @input="fetchTasks" />
    <!-- Lista de tareas renderizada dinámicamente -->
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.title }}: {{ task.description }}</li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  data() {
    return {
      // Almacena el título para buscar tareas
      title: '',
      // Almacena las tareas obtenidas de la consulta GraphQL
      tasks: [],
    };
  },
  methods: {
    // Método para buscar tareas utilizando Apollo Client
    async fetchTasks() {
      const client = this.$apollo.provider.defaultClient;
      const { data } = await client.query({
        // Definición de la consulta GraphQL para obtener tareas
        query: gql`
          query GetTasks($title: String) {
            getTasks(title: $title) {
              id
              title
              description
            }
          }
        `,
        // Pasa el título como variable a la consulta
        variables: { title: this.title },
      });
      // Actualiza la lista de tareas con los resultados de la consulta
      this.tasks = data.getTasks;
    },
  },
};
</script>
