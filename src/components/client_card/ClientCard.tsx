import ClientCardActionsArea from "../client_card_actions_area/ClientCardActionsArea";
import ClientCardColumn from "../client_card_column/ClientCardColumn";
import { numberToString } from "./script";

const ClientCard = (props: { nome: string, idade: number | string }) => {
    return (
        <div>
            <ClientCardColumn title="nome" content={props.nome} />
            <ClientCardColumn title="idade" content={numberToString(props.idade)} />
            <ClientCardActionsArea/>
        </div>
    )
};

export default ClientCard;