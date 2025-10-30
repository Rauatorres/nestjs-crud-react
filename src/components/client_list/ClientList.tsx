import { useEffect, useState } from "react";
import ClientCard from "../client_card/ClientCard";
import { apiGetClientList } from "./script";
import type { Client } from "../../types/client";
import ClientAddButton from "../client_add_button/ClientAddButton";


const ClientList = () => {
    const [clientList, setClientList] = useState<Client[]>([]);

    useEffect(() => {
        async function getClientListRequest(){
            const clientListResult = await apiGetClientList();
            setClientList(clientListResult)
        }
        getClientListRequest();
    }, [])

    function showClientList(clientList: Client[]){
        return clientList.map(client => {
            return (
                <ClientCard key={client.id} nome={client.name} idade={client.age}/>
            );
        });
    }

    return (
        <>
            <div>
                {showClientList(clientList)}
            </div>
            <div>
                <ClientAddButton />
            </div>
        </>
    )
};

export default ClientList;