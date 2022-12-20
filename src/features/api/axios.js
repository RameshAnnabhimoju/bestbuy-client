import axios from "axios";

export default axios.create({
  baseURL: "https://bestbuy-server.vercel.app/",
  headers: {
    "Access-Control-Allow-Origin": "https://bestbuy-server.vercel.app/",
    "Access-Control-Allow-Methods": "GET, POST,PATCH, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
});
