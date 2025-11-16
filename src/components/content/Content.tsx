import { type ReactNode } from "react";

import styles from "../../styles/content/content.module.css";

const Content = (props: { children: ReactNode }) => {
    return(
        <main className={styles.content}>
            {props.children}
        </main>
    )
}

export default Content;