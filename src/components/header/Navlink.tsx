import styles from "../../styles/header/navlink.module.css";

function pagePath(propsPage: string | undefined | null){
    if(typeof propsPage == "string"){
        return propsPage;
    }else{
        return "";
    }
}

function navLinkStyle(isHighlighted: boolean){
    if(isHighlighted){
        return styles.navlink + ' ' + styles.current;
    }else{
        return styles.navlink;
    }
}


const Navlink = (props: { isHighlighted: boolean, text: string, page?: string }) => {
    return(
        <a 
        className={navLinkStyle(props.isHighlighted)} 
        href={`/${pagePath(props.page)}`}>
            {props.text}
        </a>
    )
}

export default Navlink;