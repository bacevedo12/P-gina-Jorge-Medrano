import React from 'react'
import fotoHigado2 from '../images/fotoHigado2.jpg'
import logoHospital from '../images/logoHospitalHiguera.jpg'
import logoSanatorio from '../images/logoSanatorioAleman.jpg'

const FooterPagina = () => {
    return (
      <div>
          <footer className="text-white bg-dark py-4">
                <nav className="row justify-content-around align-items-center contenedorFooter"> 
                    <div className="col-xs-12 col-lg-3">
                    <img className="imagenHigadoFooter img-fluid"alt="logo"src={fotoHigado2} />
                    </div>
                  
                    <div class=" col-sm-12 col-md-4 col-lg-3">  
                    
                    <a href="https://www.hospitallashigueras.cl/" target="_blank">
                    <img className="logoHospitalHiguera img-fluid"alt="logo"src={logoHospital} />
                    </a>
                    <p className='mt-3'>Hospital Las Higueras</p>
                    </div> 
                  
                    
                    <div class=" col-sm-12 col-md-4 col-lg-3">  
                    <a href="https://www.sanatorioaleman.cl/" target="_blank">
                    <img className="logoHospitalHiguera img-fluid"alt="logo"src={logoSanatorio} />
                    </a>
                    <p className='mt-3'>Sanatorio Alemán</p>
                   </div>  
                    
                    <div className='col-xs-12 col-lg-3'>
                        {/* <h3>Contacto</h3> */}
                        <i className="telefono fa-solid fa-phone text-danger"></i>
                        <p> 800 100 555</p>
                        <i class="fa-solid fa-envelope text-danger"></i>
                        <p>jmedranod@gmail.com</p>
                    </div>
                  
                  {/* <div className='col-12 col-md-12 d-flex justify-content-center text-center'> 
                        <p className="text-center text-muted">© 2023 by Bárbara</p>
                  </div> */}
                </nav>

            </footer> 
        </div>
    );
  }
  
  export default FooterPagina;
