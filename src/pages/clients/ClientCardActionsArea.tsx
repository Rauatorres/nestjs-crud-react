/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";

import ClientCardAction from "./ClientCardAction";

// import { editMode } from "./script";
import { ClientContext } from "../../context/ClientContext";

import { FaCheck } from "react-icons/fa";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { GoListUnordered } from "react-icons/go";

import styles from "../../styles/client/clientCardActionsArea.module.css";
import { del, update } from "../../service/api";
import type { ClientEditModeListType } from "../../types/client";

async function deleteClient(id: number){
    return await del('client', id);
}

async function editMode(
    id: number, 
    clientEditModeList: ClientEditModeListType,
    isInEditMode: boolean,
    setIsInEditMode: React.Dispatch<React.SetStateAction<boolean>>,
    clientListAdd: (...params: any[]) => void, 
    clientListRemove: (...params: any[]) => void,
){
    const clientEditModeListIds = clientEditModeList.map(client => client.id);

    if(isInEditMode){
        if((clientEditModeListIds.includes(id))){
            const clientData = clientEditModeList.find(client => client.id == id)?.data || {}; 
            if(clientData.name !== undefined || clientData.age !== undefined){
                await update('client', id, clientData);
            }
            clientListRemove(id);
        }
        setIsInEditMode(false);
    }else{
        if(!(clientEditModeListIds.includes(id))){
            clientListAdd({ id: id, data: {} });
        }
        setIsInEditMode(true);
    }
}

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
                    <ClientCardAction icon={<GoListUnordered />} action={() => window.location.href = `/pedidos/${props.clientId}`}/>
                    <ClientCardAction icon={<MdModeEditOutline />} action={callEditMode} />
                    <ClientCardAction icon={<MdDelete />} action={async () => await deleteClient(props.clientId)} />
                </>
            );
        }
    }

    return (
        <div className={styles.actionsArea}>
            {showActions(isInEditMode)}
        </div>
    );
};

export default ClientCardActionsArea