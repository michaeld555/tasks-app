import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: "https://tasks-app-g4mfh.ondigitalocean.app/api",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(async (config) => {

    const data = await AsyncStorage.getItem("credentials");

    const credentials = data ? JSON.parse(data) : null;

    if (credentials) {
        config.headers.Authorization = `Bearer ${credentials.token}`;
    }

    return config;
    
}, (error) => {

    return Promise.reject(error);
    
});

export default api;
