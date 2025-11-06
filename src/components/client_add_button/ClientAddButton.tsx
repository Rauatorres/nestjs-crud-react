import { MdAdd } from "react-icons/md";
import type { Client } from "../../types/client";
import { addClientToList } from "./script";

const ClientAddButton = (props: { clientList: Client[], setter: React.Dispatch<React.SetStateAction<Client[]>> }) => {
    return (
        <button onClick={() => addClientToList(props.clientList, props.setter)} >novo cliente <MdAdd /></button>
    )
};

export default ClientAddButton
