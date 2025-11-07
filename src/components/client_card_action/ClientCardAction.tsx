import type { ReactNode } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClientCardAction = (props: { icon: ReactNode, action: () => Promise<any> }) => {
    return (
        <span onClick={() => props.action()}>{props.icon}</span>
    )
}

export default ClientCardAction