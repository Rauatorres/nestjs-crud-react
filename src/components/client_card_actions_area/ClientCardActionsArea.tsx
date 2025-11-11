// import { GoListUnordered } from "react-icons/go";
import ClientCardAction from "../client_card_action/ClientCardAction";
// import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { deleteClient, editMode } from "./script";
import { useContext, useState } from "react";
import { ClientContext } from "../../context/ClientContext";
import { FaCheck } from "react-icons/fa";

const ClientCardActionsArea = (props: { clientId: number })=>{
    const { clientEditModeList, addClientToEditModeList, removeClientfromEditModeList } = useContext(ClientContext);
    const [isInEditMode, setIsInEditMode] = useState(false);

    async function callEditMode(){
        await editMode(
            props.clientId, 
            clientEditModeList, 
            isInEditMode,
            setIsInEditMode,
            addClientToEditModeList, 
            removeClientfromEditModeList
        );
    }

    function showActions(isInEditMode: boolean){
        if(isInEditMode){

            return (
                <ClientCardAction icon={<FaCheck />} action={callEditMode} />
            );
        }else{
            return (
                <>
                    <ClientCardAction icon={<MdModeEditOutline />} action={callEditMode} />
                    <ClientCardAction icon={<MdDelete />} action={async () => await deleteClient(props.clientId)} />
                </>
            );
        }
    }

    return (
        <div>
            {/* <ClientCardAction icon={<GoListUnordered />} action="pedidos" client={props.clientId} /> */}
            {showActions(isInEditMode)}
        </div>
    );
};

export default ClientCardActionsArea