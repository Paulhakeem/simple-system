import { defineStore } from "pinia";
import axios from "axios";


export const authCounterStore = defineStore("auth", () => {

  const createAccount = async (name, password) => {
    try {
      const user = await axios.post("http://localhost:8000/signup", {
        name,
        password,
      });
      if (user) {
        router.push({
          path: "/",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const singIn = async (name, password) => {
    try {
      const login = await axios.post("http://localhost:8000/login", {
        name,
        password,
      });
      if (login) {
        console.log("successfully");
      }
    } catch (error) {}
  };

  return { createAccount, singIn };
});
