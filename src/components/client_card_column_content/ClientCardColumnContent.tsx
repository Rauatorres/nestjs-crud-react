import styles from "./clientCardColumnContent.module.css";

const ClientCardColumnContent = (props: { content: string}) => {
    return (
        <p className={styles.content}>{props.content}</p>
    )
};

export default ClientCardColumnContent;