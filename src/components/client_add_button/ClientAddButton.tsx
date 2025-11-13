import { MdAdd } from "react-icons/md";
import type { Client } from "../../types/client";
import { addClientToList } from "./script";

import styles from "./clientAddButton.module.css";

const ClientAddButton = (props: { clientList: Client[], setter: React.Dispatch<React.SetStateAction<Client[]>> }) => {
    return (
        <button className={styles.button} onClick={() => addClientToList(props.clientList, props.setter)} ><span>novo cliente</span><span className={styles.icon}><MdAdd /></span></button>
    )
};

export default ClientAddButton
