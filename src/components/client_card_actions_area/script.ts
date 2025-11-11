/* eslint-disable @typescript-eslint/no-explicit-any */
import { del, update } from "../../api/api"

async function deleteClient(id: number){
    return await del('client', id);
}

type ClientEditModeListType = { id: number, data: {name?: string, age?: number} }[];

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

export { deleteClient, editMode }