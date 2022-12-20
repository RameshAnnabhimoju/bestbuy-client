import axios from "axios";

export default axios.create({
  baseURL: "https://bestbuy-server.vercel.app/",
  headers: {
    "Access-Control-Allow-Origin": "https://bestbuy-server.vercel.app/",
  },
});
