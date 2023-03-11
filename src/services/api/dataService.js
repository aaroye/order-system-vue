const fakeJson = `{"shops":[{"id":"mcd","store":"麥當勞","foodType":[{"name":"飲料","foods":[{"name":"可口可樂","id":"e58a1c4b-51b0-4ffe-b881-23c0749d777d","price":60},{"name":"綠茶","id":"815831fd-4a57-46b1-bd70-5b7acb6d2904","price":40}]},{"name":"小點","foods":[{"name":"6塊雞塊","id":"74426197-788f-4741-83b9-dea55184bc0b","price":60},{"name":"蛋捲冰淇淋","id":"29411049-2548-445b-932b-3c4ab66d4fdf","price":20}]}]},{"id":"kfc","store":"肯德基","foodType":[{"name":"飲料","foods":[{"name":"可口可樂","id":"908b00fb-5f3b-4a83-953f-628e37f851d2","price":60},{"name":"奶茶","id":"1e21fe05-04be-4d13-9403-ff73aa47ad3d","price":50}]},{"name":"小點","foods":[{"name":"薯條","id":"86d1362c-5e4d-4053-a432-5b1de9a6278e","price":35},{"name":"香雞排","id":"63645faa-d054-4ff6-b4cd-0f15f1fdbacc","price":45}]}]},{"id":"pxm","store":"必勝客","foodType":[{"name":"披薩","foods":[{"name":"夏威夷披薩","id":"85810b14-8ab7-4ed2-be58-0423476de7ee","price":199},{"name":"辣味義大利披薩","id":"1fae9c6a-86f0-4f56-a246-603db356e62e","price":219}]},{"name":"義大利麵","foods":[{"name":"番茄肉醬義大利麵","id":"2f601487-4a9f-49fe-8e0b-bb9715d78065","price":99},{"name":"奶油培根義大利麵","id":"8abcc23d-0bd0-4491-9038-70c6248cd5ac","price":129}]}]}]}`;
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
