/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, type ReactNode } from "react";

interface ClientContextValue{
    action: number;
    actionIncrease: () => void;
    clientEditModeList: { id: number, data: {name?: string, age?: number} }[];
    addClientToEditModeList: (...params: any[]) => void,
    removeClientfromEditModeList: (...params: any[]) => void,
    updateClientInEditModeList: (...params: any[]) => void,
}

const defaultValue: ClientContextValue  = {
    action: 0,
    actionIncrease: () => {},
    clientEditModeList: [],
    addClientToEditModeList: () => {},
    removeClientfromEditModeList: () => {},
    updateClientInEditModeList: () => {},
};
const ClientContext = createContext(defaultValue);

const ClientContextWrapper = (props: { children: ReactNode }) => {
    const [action, setAction] = useState(0);
    const [clientEditModeList, setClientEditModeList] = useState<{ id: number, data: {name?: string, age?: number} }[]>([]);

    function actionIncrease(){
        setAction(action + 1);
    }

    function addClientToEditModeList(client: { id: number, data: {name?: string, age?: number} }){
        setClientEditModeList([ ...clientEditModeList, client]);
    }
    
    function removeClientfromEditModeList(clientId: number){
        const filterClient = (client: { id: number, data: {name?: string, age?: number} }) => client.id != clientId;
        setClientEditModeList(clientEditModeList.filter(filterClient));
    }

    function updateClientInEditModeList(clientId: number, newData: {name?: string, age?: number}){
        const updatedList = clientEditModeList.map(client => {
            if(client.id === clientId){
                return { id: client.id, data: { ...client.data, ...newData } };
            }
            return client;
        });
        setClientEditModeList(updatedList);
    }

    return (
        <ClientContext.Provider value={{ action, actionIncrease, clientEditModeList, addClientToEditModeList, removeClientfromEditModeList, updateClientInEditModeList }} >{props.children}</ClientContext.Provider>
    )
}

export { ClientContext, ClientContextWrapper }
