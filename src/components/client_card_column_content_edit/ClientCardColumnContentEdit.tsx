import { useContext, useState } from "react";
import { ClientContext } from "../../context/ClientContext";
import { updateField } from "./script";

import styles from "./clientCardColumnContentEdit.module.css";

const ClientCardColumnContentEdit = (props: { 
        content: string | number, 
        clientId: number, 
        field: string, 
        type: string
}) => {
    const { updateClientInEditModeList } = useContext(ClientContext);

    const [inputValue, setInputValue] = useState(props.content);

    function inputWidth(): string{
        if(props.type === "number"){
            return "5rem";
        }
        return "100%";
    }
    
    return (
        <input style={ { width: inputWidth() } } className={styles.content} type={props.type} value={inputValue} onChange={ e => updateField(
            e.target.value, 
            setInputValue,
            updateClientInEditModeList,
            props.clientId,
            props.field
        ) } />
    )
};

export default ClientCardColumnContentEdit;