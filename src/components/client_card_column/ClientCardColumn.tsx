import type { ReactNode } from "react";
import ClientCardColumnTitle from "../client_card_column_title/ClientCardColumnTitle";

import styles from "./clientCardColumn.module.css";

const ClientCardColumn = (props: { title: string, content: ReactNode }) => {
    return (
        <div className={styles.column}>
            <ClientCardColumnTitle title={props.title} />
            {props.content}
        </div>
    )
};

export default ClientCardColumn;