import Cabecera from "components/Cabecera/Cabecera"
import Container from "components/Container/Container"
import Pie from "components/Pie/Pie"
import FavoritoProvider from "context/favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase() {
    return (
        <main>
            <Cabecera />
            <FavoritoProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritoProvider>
            <Pie />
        </main>
    )

}
export default PaginaBase