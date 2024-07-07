
import Banner from "components/Banner/Banner"
import Titulo from "components/Titulo/Titulo"
import Card from "components/Card/Card"
import styles from "./Inicio.module.css"
import { useEffect, useState } from "react"

function Inicio() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/LeonardoFMR/alura-cinema-api/videos")
            .then(response => response.json())
            .then(data => {
                setVideos(data)
            });
    },[]);

    return (
        <>

            <Banner img="home" color="#154580" />
            <Titulo>
                <h1>Un lugar para guardar tus videos favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>

        </>
    );

}

export default Inicio;
