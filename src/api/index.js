import axios from "axios";

export const BASE_URL = "http://localhost:3001";

export const getAllWeatherApi = async () => {
    const response = await axios.get(`${BASE_URL}/weather`);
    return response;    
}

export const addWeatherApi = async (data) => {
    const response  = await axios.post(`${BASE_URL}/weather/add`, data);
    return response;
}

export const deleteWeatherByIdApi = async (name) => {
    const response  = await axios.delete(`${BASE_URL}/weather?cityName=${name}`);
    return response;
}
