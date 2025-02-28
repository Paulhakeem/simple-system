import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed, onMounted } from "vue";

export const useTransStore = defineStore("transactions", () => {
  const statments = ref([
    {
      name: "ice cube",
      amount: 300,
      date: "2025-02-26",
    },
  ]);
  const createTransaction = async (name, amount, date) => {
    await axios
      .post("http://localhost:8000/transactions", {
        name,
        amount,
        date,
      })
      .then((result) => {
        // const data = result.data.create
        statments.value.push(result.data.create);
        console.log(statments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const totalMount = computed(() => {
    return statments.value.reduce(
      (total, statment) => total + statment.amount,
      0
    );
  });

  onMounted(async() => {
    const res = await axios.get("http://localhost:8000/statements");
    if (res) {
      statments.value = res.data.data
    } else {
      console.log("error");
    }
  })

  return {
    createTransaction,
    statments,
    totalMount,
  };
});
