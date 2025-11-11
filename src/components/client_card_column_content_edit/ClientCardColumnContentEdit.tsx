import { useContext, useState } from "react";
import { ClientContext } from "../../context/ClientContext";
import { updateField } from "./script";

const ClientCardColumnContentEdit = (props: { content: string | number, clientId: number, field: string, type: string}) => {
    const [inputValue, setInputValue] = useState(props.content);
    const { updateClientInEditModeList } = useContext(ClientContext);

    return (
        <input type={props.type} value={inputValue} onChange={ e => updateField(
            e.target.value, 
            setInputValue,
            updateClientInEditModeList,
            props.clientId,
            props.field
        ) } />
    )
};

export default ClientCardColumnContentEdit;