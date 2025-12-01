import { useContext, useEffect, useState } from "react"
import { getOne } from "../../service/api";
import type { Client } from "../../types/client";
import { OrderContext } from "../../context/OrderContext";

import styles from '../../styles/orders/ClientName.module.css';

const ClientName = () => {
    const { clientId } = useContext(OrderContext);
    
    const [clientName, setClientName] = useState("");

    useEffect(() => {
        async function fetchClient(){
            const res = await getOne<Client>('client', clientId);
            setClientName(res.name);
        }
        fetchClient();
    }, [])

    return (
        <h2 className={styles.clientName}>{clientName}</h2>
    )
}

export default ClientName