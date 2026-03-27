import axios from "axios";

const BASE = "http://localhost:5000";

export const uploadCSV = (csvText, onProgress) =>
    axios.post(`${BASE}/api/import`, { csvText }, { onUploadProgress: onProgress });

export const getProducts = () => axios.get(`${BASE}/api/products`);

export const getHistory = () => axios.get(`${BASE}/api/history`);