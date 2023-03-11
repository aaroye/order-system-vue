<script setup>
  import { ref } from "vue";
  import { VueFinalModal } from "vue-final-modal";
  defineProps({
    title: String,
  });
  const emit = defineEmits("confirm");

  const count = ref(1);

  const countBtnClickHandler = (isPlus) => {
    count.value = count.value + (isPlus ? 1 : -1);
  };
</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <h1>{{ title }}</h1>
    <slot />
    <div class="inputContainer">
      <button class="countBtn" @click="() => countBtnClickHandler(false)">
        -
      </button>
      <input type="text" class="countText" v-model="count" />
      <button class="countBtn" @click="() => countBtnClickHandler(true)">
        +
      </button>
    </div>
    <button @click="emit('confirm')">新增 {{ count }} 個</button>
  </VueFinalModal>
</template>

<style>
  .confirm-modal {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .confirm-modal-content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: #fff;
    border-radius: 0.5rem;
  }
  .confirm-modal-content > * + * {
    margin: 0.5rem 0;
  }
  .confirm-modal-content h1 {
    font-size: 1.375rem;
  }
  .confirm-modal-content > button {
    margin: 0.25rem 0 0 auto;
    padding: 0 8px;
    border: 1px solid;
    border-radius: 0.5rem;
  }
  .dark .confirm-modal-content {
    background: #000;
  }
</style>

<style scoped lang="scss">
  .inputContainer {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  .countText {
    width: 2rem;
    text-align: center;
  }
  .countBtn {
    background-color: orangered;
    color: white;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    border: 0;
    cursor: pointer;
    transition: background-color 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      background-color: orange;
    }
  }
</style>
