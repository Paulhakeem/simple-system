import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useShopStore = defineStore("shops", () => {
  const shops = ref([]);

  const addShop = async (name, userId) => {
    await axios
      .post(`${import.meta.env.VITE_API_URL}/create-shop-category`, {
        name,
        userId,
      })
      .then((result) => {
        console.log(result.data);
        shops.value = result
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { shops, addShop };
});
