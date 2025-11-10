/* eslint-disable @typescript-eslint/no-explicit-any */
import { del } from "../../api/api"

async function deleteClient(id: number){
    return await del('client', id);
}

function editMode(
    id: number, 
    clientEditModeList: number[],
    isInEditMode: boolean,
    setIsInEditMode: React.Dispatch<React.SetStateAction<boolean>>,
    clientListAdd: (...params: any[]) => void, 
    clientListRemove: (...params: any[]) => void,
){
    if(isInEditMode){
        setIsInEditMode(false);
    }else{
        setIsInEditMode(true);
    }
    if(!(clientEditModeList.includes(id))){
        clientListAdd(id);
    }else{
        clientListRemove(id);
    }
}

export { deleteClient, editMode }