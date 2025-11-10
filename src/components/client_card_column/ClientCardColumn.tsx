import type { ReactNode } from "react";
import ClientCardColumnTitle from "../client_card_column_title/ClientCardColumnTitle";

const ClientCardColumn = (props: { title: string, content: ReactNode }) => {
    return (
        <div>
            <ClientCardColumnTitle title={props.title} />
            {props.content}
        </div>
    )
};

export default ClientCardColumn;