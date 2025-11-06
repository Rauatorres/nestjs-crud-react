import ClientList from "../../components/client_list/ClientList";
import Page from "../../components/page/Page";

const ClientPage = () => {
    return (
        <Page currentPage="clientes" pageTitle="Clientes">
            <ClientList/>
        </Page>
    )
};

export default ClientPage;