<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <button @click="goToDaybook" type="button" class="btn btn-primary">
    Primary
  </button>
  <button @click="goToDaybook" type="button" class="btn btn-secondary">
    Secondary
  </button>
  <button @click="goToDaybook" type="button" class="btn btn-success">
    Success
  </button>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>