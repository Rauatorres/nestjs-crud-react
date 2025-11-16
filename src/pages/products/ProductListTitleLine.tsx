import styles from '../../styles/product/productListTitleLine.module.css';

const ProductListTitleLine = () => {
    return (
        <div className={styles.productListTitleLine}>
            <div className={styles.col1}>Nome</div>
            <div className={styles.col2}>Preço</div>
            <div className={styles.col3}>Ações</div>
        </div>
    );
}

export default ProductListTitleLine