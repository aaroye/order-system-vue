<script setup>
  import { ref } from "vue";
  import { pushRoute } from "../../router";
  const props = defineProps({
    name: String,
    id: String,
    imgSrc: String,
  });

  const clickHandler = () => {
    pushRoute("shops/" + props.id);
  };
</script>

<template>
  <div class="card" @click="clickHandler">
    <img :src="imgSrc" alt="" class="shop-image" />
    <p>{{ name }}</p>
  </div>
</template>

<style scoped lang="scss">
  .card {
    width: 300px;
    height: 300px;
    // border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    animation: show 1s cubic-bezier(0.075, 0.82, 0.165, 1) normal;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 8px 0 rgba(255, 175, 25, 0.836);
    }
  }

  .shop-image {
    height: 180px;
    width: 180px;
    border-radius: 1rem;
  }
  p {
    padding-top: 1rem;
    font-size: 1.3rem;
  }
  @keyframes show {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes hover {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
</style>
