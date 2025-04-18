import { defineStore } from "pinia";
import axios from "axios";

export const authCounterStore = defineStore("auth", () => {
  const createAccount = async (name, password) => {
    try {
      const user = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, {
        name,
        password
      });

      if (user) {
        const token = user.data.token 
        localStorage.setItem('token', token)
        console.log(user);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const singIn = async (name, password) => {
    try {
      const user = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        name,
        password,
      });
      if (user) {
        const token = user.data.token 
        localStorage.setItem('token', token)
        console.log(user);
      }
    } catch (error) {
      console.log("error occurs");
    }
  };

  return { createAccount, singIn };
});
