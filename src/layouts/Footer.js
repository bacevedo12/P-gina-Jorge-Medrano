import React from 'react'
import fotoHigado2 from '../images/fotoHigado2.jpg'
import logoHospital from '../images/logoHospitalHiguera.jpg'
import logoSanatorio from '../images/logoSanatorioAleman.jpg'
import logoRedMedicaSur from '../images/redmedicasur.jpg'


const FooterPagina = () => {
  const numeroTelefono = "800 100 555"; 

  const handleLlamarClick = () => {
    window.location.href = "tel:" + numeroTelefono;
  };
    return (
      <div>
          <footer className="text-white bg-dark py-4">
                <nav className="row justify-content-around align-items-center contenedorFooter"> 
                    <div className="col-xs-12 col-lg-3">
                    <img className="imagenHigadoFooter img-fluid"alt="logo"src={fotoHigado2} />
                    </div>
                  
                    <div class=" col-sm-12 col-md-3 col-lg-3">         
                    <a href="https://www.hospitallashigueras.cl/" target="_blank">
                    <img className="logoHospitalHiguera img-fluid"alt="logo"src={logoHospital} />
                    </a>
                    <p className='mt-3'>Hospital Las Higueras</p>
                    <i class="fa-solid fa-envelope text-danger"></i>
                        <p>drjorgemedranod@gmail.com</p>
                      </div> 
                  
                  
                    <div class=" col-sm-12 col-md-3 col-lg-3">         
                    <a href="https://redmedicasur.cl/" target="_blank">
                    <img className="logoHospitalHiguera img-fluid"alt="logo"src={logoRedMedicaSur} />
                    </a>
                    <p className='mt-3'>RedMédicaSur</p>
                    <i onClick={handleLlamarClick} className="telefono fa-solid fa-phone text-danger"></i>
                        <p>(44)3208017</p>
                    </div> 

                    <div class=" col-sm-12 col-md-3 col-lg-3">  
                    <a href="https://www.sanatorioaleman.cl/" target="_blank">
                    <img className="logoHospitalHiguera img-fluid"alt="logo"src={logoSanatorio} />
                    </a>
                    <p className='mt-3'>Sanatorio Alemán</p>
                    <i onClick={handleLlamarClick} className="telefono fa-solid fa-phone text-danger"></i>
                        <p> 800 100 555</p>
                   </div>    
                  
                </nav>
                
            </footer> 
            <div className='divByBarbara col-12 col-md-12 d-flex justify-content-center text-center'> 
                        <p className="text-center text-muted text-white">© 2023 by Bárbara. Todos los derechos reservados</p>
                  </div>
        </div>
    );
  }
  
  export default FooterPagina;
