<template>
  <button
    type="button"
    class="btn toggle-btn"
    :aria-pressed="isPressed"
    @click="$emit('filterUpdated', name)"
  >
    <span class="visually-hidden">Show </span>
    <span>{{ name }}</span>
    <span class="visually-hidden"> tasks</span>
  </button>
</template>
<script>
export default {
  name: 'FilterButton',
  props: {
    name: {
      type: String,
    },
    isPressed: {
      type: Boolean,
    },
  },
};
</script>
