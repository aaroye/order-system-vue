<script setup>
  import { ref } from "vue";

  defineProps({
    id: String,
  });
</script>

<template>
  <div class="shop">
    <h1>歡迎來到商店頁面</h1>
  </div>
</template>

<style scoped lang="scss">
  .shop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
