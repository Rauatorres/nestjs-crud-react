import Navbar from "../navbar/Navbar";

import styles from "./header.module.css";

const Header = (props: {currentPage: string}) => {
    return(
        <header className={styles.header}>
            <Navbar currentPage={props.currentPage} />
        </header>
    )
}

export default Header;