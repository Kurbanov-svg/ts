import axios from "axios";

export const api_crud = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

console.log("Using API baseURL:", import.meta.env.VITE_API_URL);
