<template>
  <button @click="changeModalStatus" class="login101-form-btn">
    <i class="fa fa-2x fa-question"></i>
  </button>
  <modal v-if="showModal" @on:close="changeModalStatus">
    <template v-slot:header>
      <h4>Hola! 👋👋</h4>
    </template>
    <template v-slot:body>
      This journal app in spanish was created by
      <a
        target="_blank"
        class="link-underline-danger link-offset-3"
        href="https://github.com/raulpenate"
        ><i class="fa-brands fa-github"></i> Raul Penate</a
      >
      thanks to the help of the courses of
      <a
        target="_blank"
        class="link-underline-danger link-offset-3"
        href="https://github.com/Klerith"
        ><i class="fa-brands fa-github"></i> Fernando Herrera</a
      >.
      <br />
      If you don't have an account, just create one!!, in the register section.
      <br />
      <br />
      Dear creators of Flaticon and Unsplash, I am writing to express my
      gratitude for the incredible resources you have provided on your websites.
      <br />
      <br />
      <a
        target="_blank"
        class="thanks link-underline-danger link-offset-3"
        href="https://unsplash.com/photos/U-kgVFYLCDo"
        ><i class="fa-solid fa-camera"></i> Image created by Andrii Leonov -
        unplash</a
      >
      <br />
      <a
        target="_blank"
        class="thanks link-underline-danger link-offset-3"
        href="https://www.flaticon.com/free-icons/journal"
        title="journal icons"
        ><i class="fa-solid fa-icons"></i> Journal icons created by Freepik -
        Flaticon</a
      >
      <br />
      <a
        target="_blank"
        class="thanks link-underline-danger link-offset-3"
        href="https://www.flaticon.com/free-icons/typewriter"
        title="typewriter icons"
        ><i class="fa-solid fa-icons"></i> Typewriter icons created by Maxim
        Basinski Premium - Flaticon</a
      >
      <br />
      <br />
      <b>Important:</b><i> <br />
        Please note that this app is for educational purposes only. I want to make it clear that any information you provide may be deleted without warning, and I am not responsible for any loss of data or information. So, please use the app only to view my work and not for any important or sensitive information. Thanks for your cooperation!</i>
    </template>
  </modal>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import useAuth from "@/modules/auth/composables/useAuth";

const modal = defineAsyncComponent(() => import("./Modal.vue"));

const { showModal, changeModalStatus } = useAuth();
</script>


<style lang="sass" scoped>
button
  border-radius: 100%
  bottom: 50px
  height: 80px
  position: fixed
  right: 80px
  width: 80px
  z-index: 1
a
  font-size: 1rem
  z-index: 10
  color: black

.thanks
  text-decoration: none
</style>