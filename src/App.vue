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
      :error="queryError"
      :loading="queryLoading"
    />
  </div>
</template>

<script>
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
      queryData: {
        queryTask: [],
      },
      queryError: null,
      queryLoading: false,
    };
  },
  computed: {
    filterNames() {
      return Object.keys(FILTER_MAP);
    },
    tasks() {
      return this.queryData?.queryTask
        .filter(FILTER_MAP[this.filter]);
    },
    remainingTasksNumber() {
      if (this.queryLoading || this.queryError) return 0;

      return this.queryData.queryTask
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
