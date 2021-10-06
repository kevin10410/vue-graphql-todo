<template>
  <div id="app" class="todoapp stack-large">
    <h1>Vue GraphQL Todo</h1>
    <Form
      :name="name"
      :error="addTaskError"
      :loading="addTaskLoading"
      @addTask="addTaskHandler"
      @inputChanged="inputChangedHandler"
    />
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
import Form from '@/components/Form.vue';
import TaskList from '@/components/TaskList/index.vue';
import FilterButton from '@/components/FilterButton.vue';
import { QUERY_TASK, ADD_TASK } from '@/graphql/query';

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
      addTaskError: null,
      addTaskLoading: false,
    };
  },
  apollo: {
    queryTask: {
      query: QUERY_TASK,
    },
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
    inputChangedHandler(e) {
      const { value } = e.target;
      this.name = value;
    },
    addTaskHandler() {
      this.addTaskError = null;
      this.addTaskLoading = true;
      this.$apollo.mutate({
        mutation: ADD_TASK,
        variables: {
          title: this.name,
        },
        update: (cache, { data: { addTask } }) => {
          const data = cache.readQuery({ query: QUERY_TASK });
          const { task } = addTask;
          data.queryTask.push(task[0]);
          cache.writeQuery({ data, query: QUERY_TASK });
        },
      }).then(() => {
        this.name = '';
        this.addTaskLoading = false;
      }).catch((error) => {
        this.addTaskError = error;
        this.addTaskLoading = false;
      });
    },
  },
  components: {
    Form,
    TaskList,
    FilterButton,
  },
};
</script>
