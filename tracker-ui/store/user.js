import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref([]);

  const getUser = async () => {
    try {
      const user = await axios.get("http://localhost:8000/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (user) {
        localStorage.getItem('token')

        console.log(user);
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
