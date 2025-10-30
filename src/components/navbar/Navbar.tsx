import Navlink from "../navlink/Navlink";
import { isCurrentPage } from "./script";

const Navbar = (props: { currentPage: string }) => {
    return(
        <nav>
            <ul>
                <li><Navlink isHighlighted={isCurrentPage(props.currentPage, "clientes")} text="Clientes" /></li>
                <li><Navlink isHighlighted={isCurrentPage(props.currentPage, "produtos")} page="produtos" text="Produtos" /></li>
            </ul>
        </nav>
    )
}

export default Navbar;