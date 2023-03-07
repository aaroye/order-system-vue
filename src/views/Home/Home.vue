<script setup>
  import ShopCard from "./ShopCard.vue";
  import Loader from "../../components/Loader.vue";
  import Typed from "typed.js";
  import { getAllShopData } from "../../services/api/dataService";
  import { onMounted, ref } from "vue";

  const fakeImgUrl = [
    "https://picsum.photos/id/152/100/100",
    "https://picsum.photos/id/231/100/100",
    "https://picsum.photos/id/443/100/100",
  ];
  const shopData = ref(null);
  const typing = ref(null);

  const getData = "";

  onMounted(() => {
    getAllShopData()
      .then((data) => {
        if (data.state === "ok") {
          shopData.value = data.shops;
        }
      })
      .catch((err) => console.log(err));
    new Typed(typing.value, {
      strings: [
        "今天想要來點... 珍珠奶茶？",
        "今天想要來點... 麥當勞麥香雞？",
        "今天想要來點... 必勝客買一送一大披薩？",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      smartBackspace: true,
      loop: true,
    });
  });
</script>

<template>
  <div class="home">
    <h1>Welcome, 歡迎！</h1>
    <h2><span ref="typing" class="typing"></span></h2>
    <div class="cards" v-if="shopData">
      <ShopCard
        v-if="shopData"
        v-for="(data, index) in shopData"
        :name="data.store"
        :id="data.id"
        :imgSrc="fakeImgUrl[index]"
      />
    </div>
    <Loader v-else style="margin-top: 15rem" />
  </div>
</template>

<style scoped lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cards {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
  }

  .typing {
    color: rgb(80, 80, 80);
  }
</style>
