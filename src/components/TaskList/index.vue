<template>
  <div class="taskListWrapper">
    <p v-if="error">Error...</p>
    <p v-else-if="loading">Loading...</p>
    <ul v-else
      class="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      <Task
        v-for="task in tasks"
        :id="task.id"
        :key="task.id"
        :name="task.title"
        :completed="task.completed"
      />
    </ul>
  </div>
</template>
<script>
import Task from '@/components/TaskList/Task.vue';

export default {
  name: 'TaskList',
  props: {
    error: {
      type: [Object, null],
    },
    loading: {
      type: Boolean,
    },
    tasks: {
      type: Array,
    },
  },
  components: {
    Task,
  },
};
</script>
