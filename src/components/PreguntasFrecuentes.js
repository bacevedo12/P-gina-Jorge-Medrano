// import fotoAnatomiaHepatobiliar from "../images/anatomiaHepatobiliar.jpg";
// import fotoVesiculaBiliar from "../images/vesicula-biliar.jpg";
// import fotoFactoresRiesgo from "../images/FotoFactoresRiesgo.jpg";
import "./preguntasFrecuentes.css"

const PreguntasFrecuentes = () => {
    return (
        <section className="border-top border-bottom border-bottom-light border-top-light border-3 preguntasFrecuentes">
            <div className="tituloCirugia">
                <h1 className="pt-5 pb-2 fw-bold">CIRUGÍA HEPATOBILIAR Y PANCREÁTICA</h1>
                <h1 className="mt-4 pt-5 text-white fw-bold tituloPreguntasFrecuentes">Preguntas Frecuentes</h1>
            </div>
            <div className="seccionPreguntas m-5 border border-white">
            <div>
                 <h2 className="pregunta fw-bold text-start ms-5 mt-5  mb-4">I. ¿Qué es la cirugía Hepato-Bilio- Pancreática?</h2>
                 <p className="text-start text-white ms-5 me-5 mb-5">La cirugía hepato-bilio-pancreática se dedica a tratar problemas relacionados con el hígado, la vesícula biliar, conductos biliares y el páncreas mediante intervenciones quirúrgicas. Esto puede incluir la extirpación de tumores o quistes, la reparación de lesiones o anomalías, 
                 la resolución de obstrucciones o bloqueos en los conductos biliares.</p>
            </div>
            <div>
                 {/* <img alt="fotoAnatomiaHepatobiliar"src={fotoAnatomiaHepatobiliar} className="fotoAnatomiaHepatobiliar mt-3 mb-3"/>   */}
            </div>
            <div>
                 <h2 className="pregunta fw-bold text-start ms-5 mt-5 mb-4">II.	¿Porque en Chile es importante operarse de la vesícula biliar cuando existen cálculos o piedras en ella (Colelitiasis)?</h2>
                <ol className="text-start text-white ms-5 me-5 mb-5">
                    <li>Chile posee una elevada frecuencia de cáncer de vesícula y uno de los factores de riesgo, son los cálculos en la vesícula (colelitiasis). El principal problema del cáncer de vesícula cuando da síntomas la mayoría de éstos se encuentra en etapas avanzadas y fuera de alcance terapéutico.</li><br></br>
                    <li>Puede dar complicaciones como la colecistitis aguda (inflamación aguda de la vesícula), la obstrucción de los conductos biliares o pancreatitis (inflamación del páncreas).
                Estas complicaciones pueden ser potencialmente peligrosas y requerir atención médica urgente.</li> 
             </ol>
            </div>
            <div>
                {/* <img alt="fotoVesicula"src={fotoVesiculaBiliar} className="fotoVesicula mt-3 mb-3 "/>   */}
            </div>
            <div>
                <h2 className="pregunta fw-bold text-start ms-5 mt-5 mb-4">III.	¿Cuál es el tratamiento de los cálculos o piedra en la vesícula biliar?</h2>
                <p className="text-start text-white ms-5 me-5 mb-5">Es la cirugía. La colecistectomía es un procedimiento quirúrgico con una alta tasa de éxito y una baja tasa de complicaciones. Los avances en la cirugía laparoscópica han hecho que esta operación sea menos invasiva, 
                lo que permite una recuperación más rápida y menos dolorosa.</p>
            </div>        
            <div>
                <h2 className="pregunta fw-bold text-start ms-5 me-5 mt-5 mb-4">IV.	¿Cuáles son las medidas de prevención recomendadas para mantener la salud hepática y biliar?</h2>
                <p className="text-start text-white ms-5 me-5 mb-5">Algunas medidas de prevención recomendadas incluyen llevar una alimentación saludable y equilibrada, limitar el consumo de alcohol, mantener un peso saludable, realizar actividad física regularmente, evitar el tabaquismo y seguir las pautas de vacunación, 
                 como la vacuna contra la hepatitis.</p>
            </div>
            <div>
                <h2 className="pregunta fw-bold text-start  ms-5 me-5 mb-4">V.	¿Qué factores de riesgo aumentan las posibilidades de desarrollar enfermedades hepatobiliares o pancreáticas?</h2>
                <p className="text-start text-white ms-5 me-5  mb-5">Los factores de riesgo pueden incluir obesidad, diabetes mal controlada, consumo excesivo de alcohol, tabaquismo, antecedentes familiares de enfermedades hepáticas o pancreáticas,
                y enfermedades crónicas como la hepatitis. </p>
            </div>
            <div>
                {/* <img alt="fotoFactoresRiesgo"src={fotoFactoresRiesgo} className="fotoVesicula mt-3 mb-3 "/>   */}
            </div>
            <div>
                <h2 className="pregunta fw-bold text-start  ms-5 me-5 mt-5 mb-4">VI.	¿Cuáles son los síntomas y signos de alarma que podrían indicar la presencia de enfermedades hepatobiliares o pancreáticas?</h2>
                <p className="text-start text-white ms-5 me-5 mb-5">Los síntomas y signos de alarma son muy inespecíficos y vagos, pero pueden incluir dolor abdominal que al dividir en abdomen en 4 podríamos tener dolor en el cuadrante superior derecho o ambos cuadrantes superiores, 
                pérdida de peso inexplicada, ictericia (coloración amarillenta de la piel y los ojos), fatiga crónica y anomalías en los exámenes de sangre.</p>
            </div>
            </div>
            {/* <div>
             <h2 className="text-start text-danger ms-5  mb-4">¿Cuando acudir al cirujano hepatobiliar?</h2>
             <p className="text-start text-white ms-5 me-5">Debería considerar acudir a un cirujano hepatobiliar si experimenta síntomas o tiene condiciones que afectan el hígado, la vesícula biliar, los conductos biliares o el páncreas. Algunos de los síntomas y afecciones que pueden requerir la atención de un cirujano hepatobiliar incluyen:</p>
             <ol className="text-start text-white ms-5 me-5">
                <li>Dolor abdominal o en la zona del hígado.</li>
                <li>Ictericia (coloración amarillenta de la piel y los ojos).</li>
                <li>Cálculos biliares.</li>
                <li>Enfermedades hepáticas, como la cirrosis.</li>
                <li>Tumores hepáticos o de páncreas.</li>
                <li>Pancreatitis aguda o crónica.</li>
                <li>Obstrucción de los conductos biliares.</li>
                <li>Sangrado en el tracto gastrointestinal.</li>
                <li>Infecciones del hígado o de la vesícula biliar.</li>   
             </ol>
             <p className="text-start text-white ms-5 me-5">Si tiene alguno de estos síntomas o condiciones, es importante que hable con su médico para determinar si debe ser referido a un cirujano hepatobiliar. El cirujano hepatobiliar trabajará en colaboración con otros profesionales de la salud para proporcionarle el mejor tratamiento posible y ayudarlo a recuperarse de su condición.</p>
            </div> */}
    </section>
    )
}

export default PreguntasFrecuentes