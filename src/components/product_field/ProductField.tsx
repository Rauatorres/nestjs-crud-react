import type { ReactNode } from "react"

const ProductField = (props: { children: ReactNode, class: string }) => {
    return (
        <div className={props.class}>{props.children}</div>
    )
}

export default ProductField