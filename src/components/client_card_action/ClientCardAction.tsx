import { useContext, type ReactNode } from "react"
import { ClientContext } from "../../context/ClientContext";

import styles from "./clientCardAction.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClientCardAction = (props: { icon: ReactNode, action: (() => Promise<any>) | (() => void) }) => {
    const { actionIncrease } = useContext(ClientContext);

    async function actionClick(){
        await props.action();
        actionIncrease();
    }
    
    return (
        <span className={styles.action} onClick={actionClick}>{props.icon}</span>
    )
}

export default ClientCardAction