import { MdAdd } from "react-icons/md";
import type { Client } from "../../types/client";

import styles from "../../styles/client/clientAddButton.module.css";
import { add } from "../../service/api";

async function addClientToList(clientList: Client[], setter: React.Dispatch<React.SetStateAction<Client[]>>){
    const res = await add("client", { name: "novo cliente", age: 0 });
    const clientId = res.identifiers[0].id;
    setter([...clientList, { id: clientId, name: "novo cliente", age: 0 }]);
}

const ClientAddButton = (props: { clientList: Client[], setter: React.Dispatch<React.SetStateAction<Client[]>> }) => {
    return (
        <button className={styles.button} onClick={() => addClientToList(props.clientList, props.setter)} ><span>novo cliente</span><span className={styles.icon}><MdAdd /></span></button>
    )
};

export default ClientAddButton
