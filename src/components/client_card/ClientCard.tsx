import type { Dispatch, SetStateAction } from "react";
import ClientCardActionsArea from "../client_card_actions_area/ClientCardActionsArea";
import ClientCardColumn from "../client_card_column/ClientCardColumn";
import { numberToString } from "./script";

const ClientCard = (props: { id: number, nome: string, idade: number | string, actionSetter: Dispatch<SetStateAction<number>>, actionState: number }) => {
    return (
        <div>
            <ClientCardColumn title="nome" content={props.nome} />
            <ClientCardColumn title="idade" content={numberToString(props.idade)} />
            <ClientCardActionsArea actionSetter={props.actionSetter} actionState={props.actionState} clientId={props.id}/>
        </div>
    )
};

export default ClientCard;