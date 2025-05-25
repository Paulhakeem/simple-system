import { defineStore } from "pinia";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useUserStore } from "./user";

export const useShopStore = defineStore("shops", () => {
  const shops = ref([]);
  const {user}= useUserStore()

  const addShop = async (name, userId) => {
    await axios
      .post(`${import.meta.env.VITE_API_URL}/create-shop-category`, {
        name,
        userId,
      })
      .then((result) => {
        shops.value.push(result.data.newShop);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onMounted(async () => {
    await axios
      .get(`${import.meta.env.VITE_API_URL}/shops`, {
        params: { userId: user._id },
      })
      .then((result) => {
        shops.value = result.data.result;
      })
      .catch((err) => {
        console.log(err)
      });
  });

  return { shops, addShop };
});
