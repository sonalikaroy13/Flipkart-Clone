import axios from "axios";

const url = 'http://localhost:8000';

export const getProducts = async () => {
    try {
        const response = await axios.get(`${url}/products`);
        console.log(response);
    } catch (error) {
        console.log('Error while calling products API');
    }
}