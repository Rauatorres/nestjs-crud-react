// import { GoListUnordered } from "react-icons/go";
import ClientCardAction from "../client_card_action/ClientCardAction";
// import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { deleteClient } from "./script";
import type { Dispatch, SetStateAction } from "react";

const ClientCardActionsArea = (props: { clientId: number, actionSetter: Dispatch<SetStateAction<number>>, actionState: number })=>{
    return (
        <div>
            {/* <ClientCardAction icon={<GoListUnordered />} action="pedidos" client={props.clientId} />
            <ClientCardAction icon={<MdModeEditOutline />} action="editar" client={props.clientId} /> */}
            <ClientCardAction icon={<MdDelete />} action={() => {
                props.actionSetter(props.actionState + 1);
                return deleteClient(props.clientId)} 
            }
            />
        </div>
    )
};

export default ClientCardActionsArea