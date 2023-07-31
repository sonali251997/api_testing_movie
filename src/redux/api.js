import { BASE_URl } from "../utils";

export const fetchData = async(endpoint) => {
    const response = await  fetch(`${BASE_URl}${endpoint}`);
    const data = await response.json();
    console.log("data",data)
    return data
}