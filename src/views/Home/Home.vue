<script setup>
  import ShopCard from "./ShopCard.vue";
  import Loader from "../../components/Loader.vue";
  import Typed from "typed.js";
  import { onMounted, ref } from "vue";
  const shopData = ref(null);
  const typing = ref(null);
  const getData = async () => {
    // try {
    //   let data = await fetch(
    //     "https://my-json-server.typicode.com/aaroye/fakeJsonServerTestData/stores"
    //   );
    //   if (!data.ok) {
    //     throw Error("fetch failed");
    //   }
    //   shopData.value = await data.json();
    //   console.log(shopData.value);
    // } catch (err) {
    //   throw Error(err);
    // }
    setTimeout(() => {
      shopData.value = JSON.parse(
        `[{"id":"mcd","store":"麥當勞","order":[{"name":"大麥克","price":79},{"name":"薯條","price":38},{"name":"可樂","price":28}]},{"id":"kfc","store":"肯德基","order":[{"name":"吮指原味雞","price":45},{"name":"脆皮炸雞","price":49},{"name":"濃情熱意紅茶","price":25}]},{"id":"pizzahut","store":"必勝客","order":[{"name":"義式肉醬麵","price":129},{"name":"夏威夷披薩","price":289},{"name":"可樂","price":28}]}]`
      );
    }, 2000);
  };

  onMounted(() => {
    getData();

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
        v-for="data in shopData"
        :name="data.store"
        :id="data.id"
        imgSrc="https://picsum.photos/100/100"
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
