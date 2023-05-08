<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100 p-t-30 p-b-50">
        <router-view />
        <fab />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const fab = defineAsyncComponent(() => import("../components/Fab.vue"));
</script>

<style lang="scss" scoped>
@import "../css/auth.css";
@import "../css/util.css";

.limiter {
  background-image: url("/src/assets/bg-01.jpg");
}
</style>
