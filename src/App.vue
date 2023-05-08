<template>
  <h1 v-if="authStatus === 'authenticating'">{{ authStatus }}</h1>
  <router-view v-else />
</template>

<script setup>
import useAuth from "./modules/auth/composables/useAuth";

const { authStatus, checkAuthStatus } = useAuth();

checkAuthStatus();
</script>