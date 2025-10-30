import ClientCardColumnContent from "../client_card_column_content/ClientCardColumnContent";
import ClientCardColumnTitle from "../client_card_column_title/ClientCardColumnTitle";

const ClientCardColumn = (props: { title: string, content: string }) => {
    return (
        <div>
            <ClientCardColumnTitle title={props.title} />
            <ClientCardColumnContent content={props.content} />
        </div>
    )
};

export default ClientCardColumn;