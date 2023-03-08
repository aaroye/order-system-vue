<script setup>
  import NavBar from "./components/NavBar.vue";
  import { ModalsContainer } from "vue-final-modal";
</script>

<template>
  <NavBar />
  <router-view></router-view>

  <ModalsContainer />
</template>

<style scoped lang="scss"></style>
