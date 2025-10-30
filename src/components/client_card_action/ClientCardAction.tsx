import type { ReactNode } from "react"

const ClientCardAction = (props: { icon: ReactNode }) => {
    return (
        <span>{props.icon}</span>
    )
}

export default ClientCardAction