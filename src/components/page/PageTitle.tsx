import styles from '../../styles/page/pageTitle.module.css';

const PageTitle = (props: { text: string }) => {
    return (
        <h1 className={styles.title}>{props.text}</h1>
    )
};

export default PageTitle;