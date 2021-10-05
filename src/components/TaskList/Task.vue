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
          @click="updateTitleHandler"
        >
          <FontAwesomeIcon
            v-if="updateLoading"
            pulse
            size="1x"
            icon={faSpinner}
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
          icon={faSpinner}
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
              icon={faSpinner}
            />
            <span v-else>Delete</span>
          </button>
        </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'Task',
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  data() {
    return {
      newName: '',
      isEditing: false,
    };
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
