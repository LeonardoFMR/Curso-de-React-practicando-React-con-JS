# ■ Curso_de_React_practicando_React_con_JS
▷ 01 Primeros pasos.
◉ 03 Creando el proyecto.
✳ Creación del maquetado para desplegar.
◉ 04 Preparando archivos.
✳ Creación del archivo jsconfig.json en la raíz del proyecto para configurar las rutas y facilitar la búsqueda de archivos.
◉ 05 Navegando entre páginas.
✳ Creación de carpeta page y página de inicio.
◉  07 Componentización.
✳ Se modulariza el proyecto creando componentes.
✳ Se crea el componente Cabecera y los links.

▷ Creando componentes.
◉ 02 Banner.
✳ Creación del Banner y sus estilos.
◉ 03 Titulo.
✳ Generación del componente Titulo para ser replicado en el proyecto.
◉ 04 Sobre el card.
✳ Implementación del componente Card.
◉ 06 Lista dinámica.
✳ Se cargan datos dinámicamente en nuestras tarjetas de React desde un archivo JSON.

▷ Definiendo contextos.
◉  02 Contextos.
✳ Se produce el contexto que permitirá la conexión entre componentes.
◉ 02 Contextos.
✳ Se produce el contexto que permitirá la conexión entre componentes.
◉ 03 Hook personalizado.
✳ Creación de una función llamada useFavoritosContext() que devuelve un objeto con dos propiedades: favorito y setFavorito.
◉ 06 Guardar favorito.
✳ Se implementa la función para agregar y quitar favoritos en las tarjetas de nuestro proyecto.
◉ 07 Listar favoritos.
✳ Se filtran las tarjetas seleccionadas a otra página.

▷ Wrapping routes (envolviendo rutas).
◉ 02 Rutas dinámicas.
✳ Se insertan rutas dinámicas en React para mostrar un reproductor de video con contenido específico.
◉ 05 Página de error.
✳ Se crea página de error para manejar rutas no especificadas
◉ 06 Rutas anidadas.
✳ Se genera una página base para re acomodar routes y anidarlas.

▷ Organizar y acceder a los datos.
◉ 02 My JSON Server.
✳ Se usa My JSON Server para acceder a datos externos.
✳ Se crea una api falsa en Github.
◉ 03 useEffect.
✳ Se establece conexión con la api fake.
◉ 05 Fetch con parámetros.
✳ Se usa fetch con parámetros para obtener datos de una API externa
◉ 06 Deploy.
✳ Se pone en línea.


import styles from "./Elemento.module.css"

function Elemento(){
    return(<>
    <h2></h2>
    
    </>)
    
    }
    export default Elemento