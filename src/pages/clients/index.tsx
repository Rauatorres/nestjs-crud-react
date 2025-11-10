import ClientList from "../../components/client_list/ClientList";
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