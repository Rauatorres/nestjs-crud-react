import { useContext, useEffect, useState } from "react";

import { ClientContext } from "../../context/ClientContext";

import axios from "axios";

import ClientCard from "./ClientCard";
import ClientAddButton from "./ClientAddButton";

import type { Client } from "../../types/client";

import styles from "../../styles/client/clientList.module.css";

const ClientList = () => {
    const { action } = useContext(ClientContext);

    const [clientList, setClientList] = useState<Client[]>([]);

    useEffect(() => {
        async function getClientListRequest(){
            const getClientList = await axios.get<Client[]>('http://localhost:3000/client/all');
            const clientListResult = getClientList.data;
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
        <div className={styles.clientListBox}>
            <div className={styles.clientList}>
                {showClientList(clientList)}
            </div>
            <div>
                <ClientAddButton clientList={clientList} setter={setClientList} />
            </div>
        </div>
    )
};

export default ClientList;