import { useContext, useEffect, useState } from "react";

import { ClientContext } from "../../context/ClientContext";

import { apiGetClientList } from "./script";

import ClientCard from "../client_card/ClientCard";
import ClientAddButton from "../client_add_button/ClientAddButton";

import type { Client } from "../../types/client";

const ClientList = () => {
    const { action } = useContext(ClientContext);

    const [clientList, setClientList] = useState<Client[]>([]);

    useEffect(() => {
        async function getClientListRequest(){
            const clientListResult = await apiGetClientList();
            setClientList(clientListResult)
        }
        getClientListRequest();
    }, [action]);

    function showClientList(clientList: Client[]){
        return clientList.map(client => {
            return (
                <ClientCard key={client.id} id={client.id} nome={client.name} idade={client.age}/>
            );
        });
    }

    return (
        <>
            <div>
                {showClientList(clientList)}
            </div>
            <div>
                <ClientAddButton clientList={clientList} setter={setClientList} />
            </div>
        </>
    )
};

export default ClientList;