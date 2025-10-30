import { GoListUnordered } from "react-icons/go";
import ClientCardAction from "../client_card_action/ClientCardAction";
import { MdDelete, MdModeEditOutline } from "react-icons/md";

const ClientCardActionsArea = ()=>{
    return (
        <div>
            <ClientCardAction icon={<GoListUnordered />} />
            <ClientCardAction icon={<MdModeEditOutline />} />
            <ClientCardAction icon={<MdDelete />} />
        </div>
    )
};

export default ClientCardActionsArea