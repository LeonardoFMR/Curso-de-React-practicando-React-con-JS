# 📌 Practicando React con JavaScript

---

## 📂 Acerca del repositorio

Este proyecto fue desarrollado como parte del curso **Practicando React con JavaScript** de **Alura LATAM**.  
El objetivo principal fue reforzar habilidades en React construyendo componentes dinámicos, gestionando estado y eventos, y estructurando una aplicación funcional.

---

## 🛠️ Tecnologías utilizadas

- HTML  
- CSS  
- JavaScript  
- React (Create React App)

---

## ⚙️ Funcionalidades implementadas

- Creación de componentes reutilizables y funcionales.  
- Gestión de estado local con hooks (`useState`).  
- Manejo de eventos (click, inputs) para interacción de usuario.  
- Renderizado condicional y listas dinámicas mediante `map()`.  
- Estructuración del proyecto con carpetas y archivos bien organizados.

---

## 🚀 Aprendizajes

Durante el desarrollo, aprendí o reforcé conocimientos en:

- Composición y reutilización de componentes en React.  
- Uso del hook `useState` para manejar datos reactivos.  
- Manejo de eventos y props para comunicación entre componentes.  
- Estructuración y organización de proyectos con Create React App.

---

## 🎯 Conclusión

Este proyecto me permitió consolidar conocimientos en React, enfocándome en la creación de interfaces interactivas y componentes bien estructurados.




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
