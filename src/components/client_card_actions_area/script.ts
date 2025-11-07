import { del } from "../../api/api"

async function deleteClient(id: number){
    return await del('client', id);
}

export { deleteClient }