import axios from "axios";

// export const API_PATH = "http://localhost:3000";
// export const API_BASE = "http://localhost:3000/api/v1";
export const API_BASE = "https://portal.munitambopata.gob.pe/api/v1";
export const API_PATH = "https://portal.munitambopata.gob.pe";

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});
