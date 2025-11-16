import type { ReactNode } from "react";
import ClientCardColumnTitle from "./ClientCardColumnTitle";

import styles from "../../styles/client/clientCardColumn.module.css";

const ClientCardColumn = (props: { title: string, content: ReactNode }) => {
    return (
        <div className={styles.column}>
            <ClientCardColumnTitle title={props.title} />
            {props.content}
        </div>
    )
};

export default ClientCardColumn;