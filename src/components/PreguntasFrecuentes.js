import fotoAnatomiaHepatobiliar from "../images/anatomiaHepatobiliar.jpg";

const PreguntasFrecuentes = () => {
    return (
        <section className="border-top border-bottom border-bottom-light border-top-light border-3">
            <div>
            <h1 className="mt-5">Preguntas Frecuentes</h1>
            <h2 className="text-start text-white ms-5  mb-4">¿Qué es la cirugía hepatobiliar?</h2>
            <p className="text-start text-white ms-5 me-5">La cirugía hepatobiliar o hepatobiliopancreática es una especialidad quirúrgica que trata las patologías de vesícula, 
            hígado, vías biliares y páncreas. La cirugía hepatobiliar es un concepto amplio que incluye la resección o sustitución de una parte del sistema hepatobiliar.
            <br></br>La cirugía más frecuente es la resección de la vesícula biliar asociado a complicaciones de litiasis biliar. </p>
            </div>
            <div>
            <img alt="fotoAnatomiaHepatobiliar"src={fotoAnatomiaHepatobiliar} className="fotoAnatomiaHepatobiliar mt-5 mb-5 img-fluid"/>  
            </div>

        </section>
    )
}

export default PreguntasFrecuentes