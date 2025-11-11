import Navlink from "../navlink/Navlink";
import { isCurrentPage } from "./script";

import styles from "./navbar.module.css";

const Navbar = (props: { currentPage: string }) => {
    return(
        <nav className={styles.navbar}>
            <ul>
                <li><Navlink isHighlighted={isCurrentPage(props.currentPage, "clientes")} text="Clientes" /></li>
                <li><Navlink isHighlighted={isCurrentPage(props.currentPage, "produtos")} page="produtos" text="Produtos" /></li>
            </ul>
        </nav>
    )
}

export default Navbar;