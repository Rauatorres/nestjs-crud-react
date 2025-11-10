/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, type ReactNode } from "react";

interface ClientContextValue{
    action: number;
    actionIncrease: () => void;
    clientEditModeList: number[];
    addClientToEditModeList: (...params: any[]) => void,
    removeClientfromEditModeList: (...params: any[]) => void,
}

const defaultValue: ClientContextValue  = {
    action: 0,
    actionIncrease: () => {},
    clientEditModeList: [],
    addClientToEditModeList: () => {},
    removeClientfromEditModeList: () => {}
};
const ClientContext = createContext(defaultValue);

const ClientContextWrapper = (props: { children: ReactNode }) => {
    const [action, setAction] = useState(0);
    const [clientEditModeList, setClientEditModeList] = useState<number[]>([]);

    function actionIncrease(){
        setAction(action + 1);
    }

    function addClientToEditModeList(clientId: number){
        setClientEditModeList([ ...clientEditModeList, clientId ]);
    }

    function removeClientfromEditModeList(clientId: number){
        const filterClient = (id: number) => id != clientId;
        setClientEditModeList(clientEditModeList.filter(filterClient));
    }

    return (
        <ClientContext.Provider value={{ action, actionIncrease, clientEditModeList, addClientToEditModeList, removeClientfromEditModeList }} >{props.children}</ClientContext.Provider>
    )
}

export { ClientContext, ClientContextWrapper }
