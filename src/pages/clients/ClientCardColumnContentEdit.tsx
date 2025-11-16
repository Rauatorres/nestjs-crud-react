import { useContext, useState } from "react";
import { ClientContext } from "../../context/ClientContext";

import styles from "../../styles/client/clientCardColumnContentEdit.module.css";

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
        <input style={ { width: inputWidth() } } className={styles.content} type={props.type} value={inputValue} onChange={ e => {
            setInputValue(e.target.value);
            updateClientInEditModeList(props.clientId, { [props.field]: e.target.value });
        } } />
    )
};

export default ClientCardColumnContentEdit;