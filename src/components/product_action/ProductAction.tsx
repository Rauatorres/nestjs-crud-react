import type { ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductAction = (props: { icon: ReactNode, action: (...args: any[]) => void }) => {
    return (
        <span onClick={props.action}>{props.icon}</span>
    );
};

export default ProductAction
