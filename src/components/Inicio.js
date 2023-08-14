import fotoDoctor from "../images/fotoDoctor.jpg";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Inicio.css"


const Inicio = () => {

    return (
        <div className="containerMain">
            <main className="row justify-content-center">
                <div className="col-lg-6 col-sm-12">
                <img alt="fotoDoctor"src={fotoDoctor} className="imagenDoctor mt-5 img-fluid"/>
                </div>
             <div className="descripcionMedico col-lg-6 col-sm-12">
              <h1 className="tituloNombre mt-5 fw-bold text-start"> Dr. JORGE MEDRANO DIAZ</h1>
              <p className="parrafoInicio pt-4 fs-3 fw-bold mt-3 text-start text-secondary">Médico Cirujano</p>
              <p className="parrafoInicio text-start fs-3 fw-bold text-secondary">Especialista en Cirugía General</p>
              <p className="parrafoInicio text-start fs-3 fw-bold text-secondary">Subespecialista en Cirugía Hepato-Bilio-Pancreatica</p>
              <Button as={Link} to="/SobreMi" className="btn text-light m-5 border border-white border-2 botonLeerMas" variant="danger">Leer más</Button>
              </div> 
            </main> 
            <section>
                <div className="imagenHigado">
                    <div>
                        <h1 className="tituloPatologias fw-bold text-center pt-5 fs-1">PRINCIPALES PATOLOGÍAS</h1>
                    </div>
                    <div>
                        <ul className="listaPatologia fw-bold text-center text-white fs-2 mt-5">Colelitiasis o Cálculos en la Vesícula Biliar</ul>
                        <ul className="listaPatologia fw-bold text-center text-white fs-2">Tumores de Hígado </ul>
                        <ul className="listaPatologia fw-bold text-center text-white fs-2">Tumores de Páncreas</ul>
                        <ul className="listaPatologia fw-bold text-center text-white fs-2">Tumores de Vesícula Biliar y Vías Biliares</ul>
                        <ul className="listaPatologia fw-bold text-center text-white fs-2">Hernias</ul>
                        <ul className="listaPatologia fw-bold text-center text-white fs-2">Pancreatitis Crónica</ul>
                    </div>
                    <div className="">
                    <a href="https://s3.philaxmed.cl/ReservaOnline.html?mc=red_medica_sur#_" target="_blank">    
                    <Button className=" btn text-light fs-5 m-5 botonPedirHora  border-white border-2 text-start" variant="danger">Pedir Hora RedMédicaSur</Button> 
                    </a>
                    <Button as={Link} to="/PaginaSanatorio" className=" btn text-light  fs-5 m-5 botonPedirHora  border-white border-2 text-start" variant="danger">Pedir Hora Sanatorio Alemán </Button>
               
                    </div>
                </div>
            </section>
        </div>
        
           
       
    )
}

export default Inicio