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

  const totalAmout = computed(() => {
    return statments.value
      .reduce((total, statment) => total + statment.amount, 0)
      .toFixed(2);
  });

  // income
  const income = computed(() => {
    return statments.value
      .filter((statment) => statment.amount > 0)
      .reduce((total, statement) => total + statement.amount, 0)
      .toFixed(2);
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
      .filter((statement) => statement.amount < 0)
      .reduce((total, statement) => total + statement.amount, 0)
      .toFixed(2);
  });

  const filterExpenses = ()=> {

  }

  return {
    createTransaction,
    statments,
    totalAmout,
    income,
    totalExpenses,
    filterExpenses
  };
});
