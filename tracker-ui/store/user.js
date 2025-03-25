import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref([]);
  const userid = ref("")
  const getUser = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get(`${import.meta.env.VITE_API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.user._id);
        
        user.value = res.data.user; 
        userid.value = res.data.user._id
      });
  };

  return {
    user,
    getUser,
    userid
  };
});
