<template>
  <div id="app" class="todoapp stack-large">
    <h1>Vue GraphQL Todo</h1>
    <Form/>
    <div class="filters btn-group stack-exception">
      <FilterButton
        v-for="filterName in filterNames"
        :key="filterName"
        :name="filterName"
        :isPressed="filterName === filter"
        @filterUpdated="filterUpdatedHandler"
      />
    </div>
    <h2 id="list-heading">
      {{ remainingTasksNumber }} tasks remaining
    </h2>
    <TaskList
      :tasks="tasks"
      :error="$apollo.queries.queryTask.error"
      :loading="$apollo.queries.queryTask.loading"
    />
  </div>
</template>

<script>
import gql from 'graphql-tag';
import Form from '@/components/Form.vue';
import TaskList from '@/components/TaskList/index.vue';
import FilterButton from '@/components/FilterButton.vue';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

export default {
  name: 'App',
  data() {
    return {
      name: '',
      filter: 'All',
      queryTask: [],
      queryError: null,
    };
  },
  apollo: {
    queryTask: gql`query {
      queryTask {
        id
        title
        completed
      }
    }`,
  },
  computed: {
    filterNames() {
      return Object.keys(FILTER_MAP);
    },
    tasks() {
      return this.queryTask
        .filter(FILTER_MAP[this.filter]);
    },
    remainingTasksNumber() {
      const { error, loading } = this.$apollo.queries.queryTask;
      if (loading || error) return 0;

      return this.queryTask
        .filter(({ completed }) => completed === false)
        .length;
    },
  },
  methods: {
    filterUpdatedHandler(filter) {
      this.filter = filter;
    },
  },
  components: {
    Form,
    TaskList,
    FilterButton,
  },
};
</script>
