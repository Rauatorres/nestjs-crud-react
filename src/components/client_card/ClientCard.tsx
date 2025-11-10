import { useContext } from "react";
import ClientCardActionsArea from "../client_card_actions_area/ClientCardActionsArea";
import ClientCardColumn from "../client_card_column/ClientCardColumn";
import ClientCardColumnContent from "../client_card_column_content/ClientCardColumnContent";
import ClientCardColumnContentEdit from "../client_card_column_content_edit/ClientCardColumnContent";
import { numberToString } from "./script";
import { ClientContext } from "../../context/ClientContext";

const ClientCard = (props: { id: number, nome: string, idade: number | string }) => {
    const { clientEditModeList } = useContext(ClientContext)
    const editMode = clientEditModeList.includes(props.id);

    function showContent(editMode: boolean, type: string, content: string){
        if(editMode){
            return (
                <ClientCardColumnContentEdit type={type} content={content} />
            )
        }else{
            return (
                <ClientCardColumnContent content={content}/>
            )
        }
    }

    return (
        <div>
            <ClientCardColumn title="nome" content={showContent(editMode, 'text', props.nome)} />
            <ClientCardColumn title="idade" content={showContent(editMode, 'number', numberToString(props.idade))} />
            <ClientCardActionsArea clientId={props.id}/>
        </div>
    )
};

export default ClientCard;