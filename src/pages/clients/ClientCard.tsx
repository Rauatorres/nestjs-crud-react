import { useContext, useEffect, useState } from "react";

import { ClientContext } from "../../context/ClientContext";

import { numberToString } from "../../utils/typeConverter";

import ClientCardActionsArea from "./ClientCardActionsArea";
import ClientCardColumn from "./ClientCardColumn";
import ClientCardColumnContent from "./ClientCardColumnContent";
import ClientCardColumnContentEdit from "./ClientCardColumnContentEdit";

import styles from "../../styles/client/clientCard.module.css";

const ClientCard = (props: { id: number, nome: string, idade: number | string }) => {
    const { clientEditModeList } = useContext(ClientContext)
    const [isInEditMode, setIsInEditMode] = useState(false);

    useEffect(() => {
        const clientEditModeListIds = clientEditModeList.map(client => client.id);
        if(clientEditModeListIds.includes(props.id)){
            setIsInEditMode(true);
        }else{
            setIsInEditMode(false);
        }
    }, [clientEditModeList, props.id]);

    function showContent(isInEditMode: boolean, type: string, field: string, content: string){
        if(isInEditMode){
            return (
                <ClientCardColumnContentEdit type={type} clientId={props.id} field={field} content={content} />
            )
        }else{
            return (
                <ClientCardColumnContent content={content}/>
            )
        }
    }

    return (
        <div className={styles.card}>
            <ClientCardColumn title="Nome" content={showContent(isInEditMode, 'text', 'name', (props.nome).toUpperCase())} />
            <ClientCardColumn title="Idade" content={showContent(isInEditMode, 'number', 'age', numberToString(props.idade))} />
            <ClientCardActionsArea clientId={props.id}/>
        </div>
    )
};

export default ClientCard;