<template>
  <div class="taskWrapper">
    <form v-if="isEditing"
      class="stack-small"
      @submit="submitNewName"
    >
      <div class="form-group">
        <label class="todo-label" :htmlFor="id">New name for {{ name }}</label>
        <input class="todo-text"
          type="text"
          :id="id"
          v-model="newName"
        />
      </div>
      <div class="btn-group">
        <button class="btn todo-cancel"
          type="button"
          :disabled="updateLoading"
          @click="isEditing = false"
        >Cancel
          <span class="visually-hidden">renaming {{ name }}</span>
        </button>
        <button class="btn btn__primary todo-edit"
          type="submit"
          :disabled="updateLoading || newName === ''"
        >
          <FontAwesomeIcon
            v-if="updateLoading"
            pulse
            size="1x"
            :icon="['fas', 'spinner']"
          />
          <span v-else>Save</span>
        </button>
      </div>
    </form>
    <div v-else class="stack-small">
      <div class="c-cb">
        <input
          type="checkbox"
          :id="id"
          :checked="completed"
          :disabled="updateLoading"
          @change="completedToggleHandler"
        />
        <label class="todo-label" :htmlFor="id">{{ name }}</label>
        <FontAwesomeIcon
          v-if="updateLoading"
          pulse
          size="lg"
          :icon="['fas', 'spinner']"
        />
        </div>
        <div class="btn-group">
          <button class="btn"
            type="button"
            :disabled="deleteLoading"
            @click="isEditing = true"
          >Edit
            <span class="visually-hidden">{{ name }}</span>
          </button>
          <button class="btn btn__danger"
            type="button"
            :disabled="deleteLoading"
            @click="deleteTaskHandler"
          >
            <FontAwesomeIcon
              v-if="deleteLoading"
              pulse
              size="lg"
              :icon="['fas', 'spinner']"
            />
            <span v-else>Delete</span>
          </button>
        </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { DELETE_TASK, UPDATE_TASK, QUERY_TASK } from '@/graphql/query';

export default {
  name: 'Task',
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    completed: {
      type: Boolean,
    },
  },
  data() {
    return {
      newName: '',
      isEditing: false,
      updateLoading: false,
      deleteLoading: false,
    };
  },
  methods: {
    submitNewName(e) {
      e.preventDefault();
      this.updateLoading = true;
      this.$apollo.mutate({
        mutation: UPDATE_TASK,
        variables: {
          id: this.id,
          title: this.newName,
          completed: this.completed,
        },
        update: (cache) => {
          const { queryTask } = cache.readQuery({ query: QUERY_TASK });
          const index = queryTask.findIndex((task) => task.id === this.id);
          queryTask[index].title = this.newName;
          cache.writeQuery({
            query: QUERY_TASK,
            data: { queryTask },
          });
        },
      }).then(() => {
        this.newName = '';
        this.isEditing = false;
        this.updateLoading = false;
      }).catch((error) => {
        console.log(error);
        this.updateLoading = false;
      });
    },
    completedToggleHandler() {
      const completed = !this.completed;
      this.$apollo.mutate({
        mutation: UPDATE_TASK,
        variables: {
          id: this.id,
          title: this.name,
          completed,
        },
        update: (cache, { data: { updateTask } }) => {
          const [updatedTask] = updateTask.task;
          const { queryTask } = cache.readQuery({ query: QUERY_TASK });
          const index = queryTask.findIndex((task) => task.id === this.id);
          queryTask[index] = updatedTask;
          cache.writeQuery({
            query: QUERY_TASK,
            data: { queryTask },
          });
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateTask: {
            task: [{
              __typename: 'Task',
              id: this.id,
              title: this.name,
              completed,
            }],
            __typename: 'UpdateTaskPayload',
          },
        },
      }).catch((error) => {
        console.log(error);
      });
    },
    deleteTaskHandler() {
      this.deleteLoading = true;
      this.$apollo.mutate({
        mutation: DELETE_TASK,
        variables: {
          id: this.id,
        },
        update: (cache, { data: { deleteTask } }) => {
          const { queryTask } = cache.readQuery({ query: QUERY_TASK });
          cache.writeQuery({
            query: QUERY_TASK,
            data: {
              queryTask: queryTask.filter((task) => task.id !== deleteTask.task[0].id),
            },
          });
        },
      }).then(() => {
        this.deleteLoading = false;
      }).catch((error) => {
        console.log(error);
        this.deleteLoading = false;
      });
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
