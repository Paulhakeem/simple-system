import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref([]);
  const plainArray = ref([]);
  const getUser = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://localhost:8000/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.user);
        
        user.value = res.data.user; 
      });
  };

  return {
    user,
    getUser,
    plainArray,
  };
});
