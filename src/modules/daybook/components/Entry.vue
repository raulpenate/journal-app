<template>
  <div class="entry-container mb-3 pointer p-2" @click="showEntry">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-5">{{ month }}</span>
      <span class="mx-2 fw-light">{{ yearDay }} </span>
    </div>

    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

export default {
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showEntry() {
      this.$router.push({ name: "entry", params: { id: this.entry.id } });
    },
  },
  computed: {
    shortText() {
      return this.entry.text.length > 130
        ? this.entry.text.substring(0, 130) + "..."
        : this.entry.text;
    },
    day() {
      const date = new Date(this.entry.date);
      return date.getDate();
    },
    month() {
      const date = new Date(this.entry.date);
      return months[date.getMonth()];
    },
    yearDay() {
      const date = new Date(this.entry.date);
      return `${date.getFullYear()}, ${days[date.getDay()]}`;
    },
  },
};
</script>

<style lang="sass" scoped>
.entry-container
  border-bottom: 1px solid #2c3e50
  transition: 0.2s all ease-in

  &:hover
    background-color: lighten($color: grey, $amount: 45)
    transition: 0.2s all ease-in
</style>