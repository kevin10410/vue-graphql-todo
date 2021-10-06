<template>
  <div>
    <p v-if="error">Error...</p>
    <h2 class="label-wrapper" v-else-if="loading">
      <FontAwesomeIcon
        spin
        size="2x"
        :icon="['fas', 'spinner']"
      />
    </h2>
    <form v-else
      @submit="submitHandler"
    >
      <h2 class="label-wrapper">
        <label htmlFor="new-todo-input" class="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input class="input input__lg"
        id="new-todo-input"
        type="text"
        name="text"
        autoComplete="off"
        :value="name"
        @change="$emit('inputChanged', $event)"
      />
      <button type="submit" class="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'Form',
  props: {
    error: {
      type: [Object, null],
    },
    loading: {
      type: Boolean,
    },
    name: {
      type: String,
    },
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      this.$emit('addTask');
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
