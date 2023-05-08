<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4841/4841120.png"
        alt="Vue logo"
        class="d-inline-block align-text-top mx-2 size"
      />
      {{ username }}'s Journal
    </a>

    <div class="d-flex">
      <button @click="onLogout" class="btn btn-outline-info mx-2">
        <i class="fa fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
import useAuth from "@/modules/auth/composables/useAuth";
import { useRouter } from "vue-router";

const { username, logout } = useAuth();
const router = useRouter()

const onLogout = () => {
  router.push({name: 'login'})
  logout()
}

</script>

<style lang="sass" scoped>
.size
    height: 24px
</style>