import Navbar from "../navbar/Navbar";

const Header = (props: {currentPage: string}) => {
    return(
        <header>
            <Navbar currentPage={props.currentPage} />
        </header>
    )
}

export default Header;