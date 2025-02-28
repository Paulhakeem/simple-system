import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed, onMounted } from "vue";

export const useTransStore = defineStore("transactions", () => {
  const statments = ref([]);
  const createTransaction = async (name, amount, date) => {
    await axios
      .post("http://localhost:8000/transactions", {
        name,
        amount,
        date,
      })
      .then((result) => {
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

  onMounted(async () => {
    const res = await axios.get("http://localhost:8000/statements");
    if (res) {
      statments.value = res.data.data;
    } else {
      console.log("error");
    }
  });

  // calculate expenses
  const totalExpenses = computed(() => {
    return statments.value
      .filter((statement) => statement.value < 0)
      .reduce((total, statement) => total + statement.amount, 0);
  });

  return {
    createTransaction,
    statments,
    totalMount,
    totalExpenses,
  };
});
