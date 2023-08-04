import { Button } from "react-bootstrap";
import "./SobreMi.css"
import { Link } from 'react-router-dom';
import fotoDoctor from "../images/fotoDoctor.jpg";

const SobreMi = () => {
    return (
        <div className="sobreMi">
        <main className=" fw-bold fs-4">
            <div className="row mb-5">
            <h1 className="nombreDoctor pt-5 mb-4 fw-bold text-center text-white ">DR. JORGE MEDRANO DÍAZ</h1>
            <hr className="linea"></hr>
            <div className="col-lg-6 col-sm-12">
                <img alt="fotoDoctor"src={fotoDoctor} className="imagenDoctor mt-2 mb-5 img-fluid"/>
            </div>
            <div className="col-lg-6 col-sm-12">
                <div className="text-white ms-5 me-5 mt-3 mb-5 p-4 border border-white border-3">
                <ul>
                <li className="listaCargos text-start ms-3 mb-2">Cirujano Hepato-Bilio-Pancréatico</li>
                <li className="listaCargos text-start ms-3 mb-2">Jefe Equipo de Cirugía Hepatobiliar. Hospital Las Higueras, Talcahuano</li>
                <li className="listaCargos text-start ms-3 mb-2">Docente Ad Honorem. Facultad de Medicina. Universidad de Concepción</li>
                <li className="listaCargos text-start ms-3 mb-2">Consulta en Sanatorio Alemán, Concepción</li>
                </ul>
                </div>
                <Button as={Link} to="/PaginaSanatorio" className="btn text-light fw-bold fs-4  border border-white border-2 botonPedirHora2 text-start" variant="danger">Pedir Hora</Button>
                  
            </div>
            </div>
            <div className="row col-3 justify-content-start">
            
            </div>
           
        </main>
        <section className="estudios pb-5">
            <h1 className="tituloEstudios pt-5 pb-4 text-center fw-bold text-white">ESTUDIOS Y PERFECCIONAMIENTO</h1>
            <hr></hr>
            <div className="row justify-content-center">
            <div className="col-6 border border-4 p-3 border-danger bg-light">
            <div className="">
            <h4 className="text-start ms-3">TÍTULO PROFESIONAL</h4>
            <div className="divider bg-danger ms-3 mb-3"></div>
            <p className="text-start ms-3">Médico Cirujano, Universidad Antofagasta. 2011</p>
            <h4 className="text-start ms-3 ">ESPECIALIDAD</h4>
            <div className="divider bg-danger ms-3 mb-3"></div>
            <p className="text-start ms-3">Médico Especialista en Cirugía General, Universidad Concepción. 2015-2018</p>
            <h4 className="text-start ms-3">SUBESPECIALIDAD</h4>
            <div className="divider bg-danger ms-3 mb-3"></div>
            <p className="text-start ms-3">Cirujano Hepatobiliar. Henri Bismuth Hepatobiliary Institute, Francia. 2019-2020</p>
            <h4 className="text-start ms-3">PERFECCIONAMIENTO CONTINUO</h4>
            <div className="divider bg-danger ms-3 mb-3"></div>
            <p className="text-start ms-3">Pasantía en la División de Trasplante de Hígado a cargo del Pr. Luz Carneiro y División de Hígado e Hipertensión Portal a cargo del Pr. Paulo Herman. Facultad de de Medicina de la Universidad de Sao Paulo, Hospital Das Clinicas, Sao Paulo-Brasil. </p>
            <p className="text-start ms-3">Masterclass en cirugía laparoscópica de hígado y páncreas, Hospital Paul Brousse, Paris-France </p>
            <p className="text-start ms-3">New Perspectives In Hepatobiliary And Pancreatic Surgery- Hand on-  IRCAD, Strasbourg-France. </p>
            <p className="text-start ms-3">Art in Liver and Pancreatic Extreme Surgery, Hospital Hautpierre, Strasbourg-France. </p>
            <p className="text-start ms-3">Curso de Hepatología de la Sociedad Chilena de Gastroenterología</p>
            <h4 className="text-start ms-3">PUBLICACIONES RELEVANTE</h4>
            <div className="divider bg-danger ms-3 mb-3"></div>
            <p className="text-start ms-3">1. Patient outcome according to the 2017 international consensus on the
            definition of borderline resecable pancreatic ductal adenocarcinoma.
             J. Medrano , J. Garnier, J. Ewald, U. Marchese, M. Gilabert, S. Launay, F. Poizat, M. Giovannini, J.R. Delpero, O. Turrini. Pancreatology Volume 20, Issue 2, March 2020, Pages 223-228
            </p>
            </div>
            </div>
            </div>
        </section>
        </div>
     
    )
}

export default SobreMi