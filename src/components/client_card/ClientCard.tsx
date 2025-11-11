import { useContext, useEffect, useState } from "react";
import ClientCardActionsArea from "../client_card_actions_area/ClientCardActionsArea";
import ClientCardColumn from "../client_card_column/ClientCardColumn";
import ClientCardColumnContent from "../client_card_column_content/ClientCardColumnContent";
import ClientCardColumnContentEdit from "../client_card_column_content_edit/ClientCardColumnContentEdit";
import { numberToString } from "./script";
import { ClientContext } from "../../context/ClientContext";

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
        // console.log(isInEditMode);
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
        <div>
            <ClientCardColumn title="nome" content={showContent(isInEditMode, 'text', 'name', props.nome)} />
            <ClientCardColumn title="idade" content={showContent(isInEditMode, 'number', 'age', numberToString(props.idade))} />
            <ClientCardActionsArea clientId={props.id}/>
        </div>
    )
};

export default ClientCard;