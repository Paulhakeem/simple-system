import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const authCounterStore = defineStore("auth", () => {
  const name = ref("");
  const password = ref("");

  const createAccount = async () => {
    try {
      const user = await axios.post("http://localhost:8000/home/signup", {
        name,
        password,
      });
      if (user) {
        console.log("User created", user);
      }
      console.log("error");
    } catch (error) {
      console.log(error.message);
    }
  };

  return { name, password, createAccount };
});
