import type { ReactNode } from "react";

import styles from '../../styles/product/productAction.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductAction = (props: { icon: ReactNode, action: (...args: any[]) => void }) => {
    return (
        <span className={styles.action} onClick={props.action}>{props.icon}</span>
    );
};

export default ProductAction
