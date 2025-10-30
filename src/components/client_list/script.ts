import axios from "axios";
import type { Client } from "../../types/client";

async function apiGetClientList(){
    const getClientList = await axios.get<Client[]>('http://localhost:3000/client/all');
    return getClientList.data;
}

export { apiGetClientList, }
