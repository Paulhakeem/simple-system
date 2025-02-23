import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

export const authCounterStore = defineStore("auth", () => {
  const router = useRouter();
  const createAccount = async (name, password) => {
    try {
      const user = await axios.post("http://localhost:8000/signup", {
        name,
        password,
      });
      if (user) {
        console.log("User created", user);
      }
      router.push({
        path: "/",
      });
    } catch (error) {
      console.log(error.message);
    }
  };


  
  return { createAccount };
});
