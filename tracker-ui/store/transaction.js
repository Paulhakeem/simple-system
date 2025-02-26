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
        // const data = result.data.create
        statments.value.push(result.data.create)
        console.log(statments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    createTransaction, statments
  };
});
