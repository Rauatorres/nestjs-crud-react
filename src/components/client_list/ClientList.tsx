import { useEffect, useState } from "react";
import ClientCard from "../client_card/ClientCard";
import { apiGetClientList } from "./script";
import type { Client } from "../../types/client";
import ClientAddButton from "../client_add_button/ClientAddButton";

const ClientList = () => {
    const [clientList, setClientList] = useState<Client[]>([]);
    const [action, setAction] = useState(0);

    useEffect(() => {
        async function getClientListRequest(){
            const clientListResult = await apiGetClientList();
            setClientList(clientListResult)
        }
        getClientListRequest();
    }, [action])

    function showClientList(clientList: Client[]){
        return clientList.map(client => {
            return (
                <ClientCard key={client.id} id={client.id} nome={client.name} idade={client.age} actionState={action} actionSetter={setAction}/>
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