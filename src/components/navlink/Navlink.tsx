import { highlight, pagePath } from "./script";

const Navlink = (props: { isHighlighted: boolean, text: string, page?: string }) => {
    return(
        <a href={`/${pagePath(props.page)}`}>{props.text + highlight(props.isHighlighted)}</a>
    )
}

export default Navlink;