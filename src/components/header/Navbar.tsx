import Navlink from "./Navlink";

import styles from "../../styles/header/navbar.module.css";

function isCurrentPage(currentPage: string, navlinkPage: string){
    if(navlinkPage == currentPage){
        return true;
    }else{
        return false;
    }
}

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