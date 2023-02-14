import axios from "axios";

const api_base = axios.create({ baseURL: "https://api.punkapi.com/v2/" })

export default api_base