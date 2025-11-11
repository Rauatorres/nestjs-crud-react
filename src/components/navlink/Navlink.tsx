import { navLinkStyle, pagePath } from "./script";

import styles from "./navlink.module.css";

const Navlink = (props: { isHighlighted: boolean, text: string, page?: string }) => {
    

    return(
        <a className={navLinkStyle(props.isHighlighted, styles)} href={`/${pagePath(props.page)}`}>{props.text}</a>
    )
}

export default Navlink;