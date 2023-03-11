<script setup>
  import { onMounted, ref } from "vue";
  import { useModal } from "vue-final-modal";
  import { getShopData } from "../../services/api/dataService";
  import Loader from "../../components/Loader.vue";
  import FoodCard from "./FoodCard.vue";

  const props = defineProps({
    id: String,
  });
  const shopData = ref(null);
  onMounted(() => {
    getShopData(props.id)
      .then((v) => {
        shopData.value = v;
      })
      .catch((e) => {
        console.log(e);
      });
  });
</script>

<template>
  <div class="shop">
    <h1>歡迎來到商店頁面</h1>
    <div class="foodsLayout" v-if="shopData">
      <div class="type">
        <ul>
          <li v-for="(type, index) in shopData.foodType" :key="index">
            {{ type.name }}
          </li>
        </ul>
      </div>
      <div class="foods">
        <FoodCard
          v-for="(food, index) in shopData.foodType[0].foods"
          :name="food.name"
          :price="food.price"
          :key="food.id"
        />
      </div>
    </div>
    <Loader v-else />
  </div>
</template>

<style scoped lang="scss">
  .shop {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
  }

  .foodsLayout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .type {
    height: 80px;
    ul {
      display: flex;
      list-style-type: none;
      max-width: 200px;

      overflow-x: auto;
      overflow-y: hidden;
      gap: 2rem;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.432);
        box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2);
        margin: 1rem 0;
        padding: 1rem 1rem;
        border-radius: 1rem;
        transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover {
          background-color: rgb(252, 156, 121);
        }
      }

      li.selected {
        background-color: orangered;
      }
    }
  }

  .foods {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
  }
</style>
