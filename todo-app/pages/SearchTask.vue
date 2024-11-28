<template>
  <div>
    <input v-model="title" placeholder="Buscar tareas" @input="fetchTasks" />
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
      title: '',
      tasks: [],
    };
  },
  methods: {
    async fetchTasks() {
      const client = this.$apollo.provider.defaultClient;
      const { data } = await client.query({
        query: gql`
          query GetTasks($title: String) {
            tasks(title: $title) {
              id
              title
              description
            }
          }
        `,
        variables: { title: this.title },
      });
      this.tasks = data.tasks;
    },
  },
};
</script>
