<template>
  <div class="modal-background fade-in" @click.self="$emit('on:close')">
    <div class="modal-container">
      <slot name="header" />
      <br/><br>
      <slot name="body" />
      <br />
      <slot name="footer" />
      <slot name="exposed" :newTitle="newTitle" hola="mundo"></slot>
    </div>
  </div>
</template>

<script setup>
// const emit = defineEmits(["on:close"]);
</script>

<style scoped>
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
}

.modal-container {
  padding: 1rem;
  width: 35%;
  height: auto;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 3;
  overflow: hidden;
}
.modal-container > * {
    overflow: auto;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  color: red;
}

.fade-in {
  animation: fadeIn ease-out 0.2s;
  -webkit-animation: fadeIn ease-out 0.2s;
  -moz-animation: fadeIn ease-out 0.2s;
  -o-animation: fadeIn ease-out 0.2s;
  -ms-animation: fadeIn ease-out 0.2s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>