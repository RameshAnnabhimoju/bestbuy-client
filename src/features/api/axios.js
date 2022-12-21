import axios from "axios";

export default axios.create({
  baseURL: "https://bestbuy-server.vercel.app/",
  headers: {
    "Access-Control-Allow-Origin": "https://bestbuy-client.vercel.app/",
    // "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, POST,PATCH, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
});
