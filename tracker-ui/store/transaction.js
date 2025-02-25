import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useTransStore = defineStore("transactions", () => {
  const statments = ref([])
  const createTransaction = async (name, amount, date) => {
    await axios
      .post("http://localhost:8000/transactions", {
        name,
        amount,
        date,
      })
      .then((result) => {
        console.log(result.data.create);
        statments.value = result.data.create
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    createTransaction, statments
  };
});
