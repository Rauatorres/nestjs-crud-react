import ClientList from "./ClientList";
import Page from "../../components/page/Page";
import { ClientContextWrapper } from "../../context/ClientContext";

const ClientPage = () => {
    return (
        <Page currentPage="clientes" pageTitle="Clientes">
            <ClientContextWrapper>
                <ClientList/>
            </ClientContextWrapper>
        </Page>
    )
};

export default ClientPage;