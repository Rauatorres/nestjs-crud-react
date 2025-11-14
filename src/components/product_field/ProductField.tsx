import type { ReactNode } from "react"

const ProductField = (props: { children: ReactNode }) => {
    return (
        <div>{props.children}</div>
    )
}

export default ProductField