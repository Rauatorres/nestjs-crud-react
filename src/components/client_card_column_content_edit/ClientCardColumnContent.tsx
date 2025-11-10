const ClientCardColumnContentEdit = (props: { content: string, type: string}) => {
    return (
        <input type={props.type} value={props.content} />
    )
};

export default ClientCardColumnContentEdit;