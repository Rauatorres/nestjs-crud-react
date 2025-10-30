import { type ReactNode } from "react";

const Content = (props: { children: ReactNode }) => {
    return(
        <main>
            {props.children}
        </main>
    )
}

export default Content;