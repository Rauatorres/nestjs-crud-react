import Navbar from "./Navbar";

import styles from "../../styles/header/header.module.css";

const Header = (props: {currentPage: string}) => {
    return(
        <header className={styles.header}>
            <Navbar currentPage={props.currentPage} />
        </header>
    )
}

export default Header;