import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref(JSON.parse(localStorage.getItem("user")) || []);

  const getUser = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/user`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });

        user.value = res.data.user;
        localStorage.setItem("user", JSON.stringify(res.data.user));
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
  };
  return{
    user,
    getUser
  }
})