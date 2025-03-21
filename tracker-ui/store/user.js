import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref([]);

  const getUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:8000/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        user.value = res.data.user;
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user,
    getUser,
  };
});
