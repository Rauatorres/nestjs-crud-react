import type { ReactNode } from "react";
import Content from "../content/Content";
import Header from "../header/Header";
import PageTitle from "./PageTitle";

const Page = (props: { currentPage: string, pageTitle: string, children?: ReactNode }) => {
    return(
        <>
            <Header currentPage={ props.currentPage }/>
            <Content>
                <PageTitle text={ props.pageTitle } />
                {props.children}
            </Content>
        </>
    )
}

export default Page;