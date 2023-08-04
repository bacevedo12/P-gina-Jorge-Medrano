import fotoPaginaSanatorio from "../images/paginaSanatorio.jpg";
import { Button } from "react-bootstrap";
import "./PaginaSanatorio.css"

const PaginaSanatorio = () => {
    return (
        <section>
        <div className="bg-light">
           <h1 className="bg-light fw-bold text-danger pt-5">¿Como Pido Hora <br></br>En el Sanatorio Alemán? </h1>
           <p className="mt-4 fs-3 text-secondary">Ingresar a la página del sanatorio alemán, ingresar a reserve su hora y marcar lo siguiente: </p>
        <div className="divFoto">
           <img alt="fotoPaginaSanatorio"src={fotoPaginaSanatorio} className="imagenDoctor bg-light mt-5 img-fluid"/>
        </div>  
        </div>
        <div className="divLetra"> 
        <a href="https://pidehora.sanatorioaleman.cl/?utm_source=web&utm_medium=boton_home&utm_campaign=click" target="_blank">
            <Button  className=" btn text-light fw-bold fs-2 m-5  botonPedirHora2 border border-white border-3 text-start" variant="danger">Pedir Hora ahora</Button>
        </a>  
        </div>
        </section>
    )
}

export default PaginaSanatorio;