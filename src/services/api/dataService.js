const fakeJson = `{"shops":[{"id":"mcd","store":"麥當勞","foodType":[{"name":"飲料","foods":[{"name":"可口可樂","price":60},{"name":"綠茶","price":40}]},{"name":"小點","foods":[{"name":"6塊雞塊","price":60},{"name":"蛋捲冰淇淋","price":20}]}]},{"id":"kfc","store":"肯德基","foodType":[{"name":"飲料","foods":[{"name":"可口可樂","price":60},{"name":"奶茶","price":50}]},{"name":"小點","foods":[{"name":"薯條","price":35},{"name":"香雞排","price":45}]}]},{"id":"pxm","store":"必勝客","foodType":[{"name":"披薩","foods":[{"name":"夏威夷披薩","price":199},{"name":"辣味義大利披薩","price":219}]},{"name":"義大利麵","foods":[{"name":"番茄肉醬義大利麵","price":99},{"name":"奶油培根義大利麵","price":129}]}]}]}`;
export function getAllShopData() {
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const json = JSON.parse(fakeJson);
      json.state = "ok";
      resolve(json);
    }, 1000);
  });
}

export function getShopData(_id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const json = JSON.parse(fakeJson);
      const shops = json.shops;
      const result = shops.find(({ id }) => id === _id);
      if (!result) {
        reject("Not found");
      }
      resolve(result);
    }, 1000);
  });
}
