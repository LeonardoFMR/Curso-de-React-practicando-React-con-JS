import Card from "components/Card/Card";
import styles from "./Favoritos.module.css"
import Banner from "components/Banner/Banner";
import Titulo from "components/Titulo/Titulo";
import { useFavoritosContext } from "context/favoritos";

function Favoritos() {
  const { favorito } = useFavoritosContext();

  return (
    <>
      <Banner img="favorite" color="#AF7EAA" />
      <Titulo>
        <h1>Mis favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
