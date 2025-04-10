import { defineStore } from "pinia";
import axios from "axios";
import { useTransStore } from "./transaction";
import { useShopStore } from "./shops";

export const useDeleteStore = defineStore("delete", () => {
  const { statments } = useTransStore();
  const {shops}=useShopStore()

  const deleteTrans = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-transaction/${id}`
      );
      if (Array.isArray(statments.value)) {
        statments.value = statments.value.filter((s) => s._id !== id);
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const deleteShop = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-shop/${id}`
      );
      if (Array.isArray(shops.value)) {
        shops.value = shops.value.filter((t) => t._id !== id);
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return { deleteTrans, deleteShop };
});
