import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed, onMounted } from "vue";
import { useUserStore } from "./user";

export const useTransStore = defineStore("transactions", () => {
  const statments = ref([]);
  const filterExp = ref([]);
  const filterInc = ref([]);

  const categories = ref({
    statements: [{}],
    filterExp: [{}],
    filterInc: [{}],
  });

  const { user } = useUserStore();

  const createTransaction = async (name, amount, date, userId) => {
    await axios
      .post(`${import.meta.env.VITE_API_URL}/transactions`, {
        name,
        amount,
        date,
        userId,
      })
      .then((result) => {
        statments.value.push(result.data.create);
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
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/statements`, {
      params: { userId: user._id },
    });
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

  onMounted(async () => {
    await axios
      .get(`${import.meta.env.VITE_API_URL}/filter-exp`)
      .then((result) => {
        filterExp.value = result.data.filter;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // calculating expenses percentage
  const getExp = computed(() => {
    if (statments.value.length === 0) {
      return 0;
    }
    return Math.round((filterExp.value.length / statments.value.length) * 100);
  });

  // calculating income percentage
  onMounted(async () => {
    await axios
      .get(`${import.meta.env.VITE_API_URL}/filter-inc`)
      .then((result) => {
        filterInc.value = result.data.filter;
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const getIncome = computed(() => {
    if (statments.value.length === 0) {
      return 0;
    }
    return Math.round((filterInc.value.length / statments.value.length) * 100);
  });

  return {
    createTransaction,
    statments,
    totalAmout,
    income,
    totalExpenses,
    filterExp,
    getExp,
    getIncome,
    filterInc,
    categories  
  };
});
