import "../../css/footer.css";

const Footer = () => {

    return(
        <footer>
            <div className="generalDiv">
            <div className="divProdSer">
                <h4>Productos y servicios</h4>
                    <ul className="ulProdSer">
                        <li><a href="#SeccionSmartphone">Smartphones</a></li>
                        <li><a href="#SeccionTvs">TVs</a></li>
                        <li><a href="#SeccionAudio">Audio</a></li>                        
                    </ul>
            </div>
            <div className="divSoporte">
                <h4>Soporte</h4>
                    <ul className="ulSoporte">
                        <li><a href="https://api.whatsapp.com/send?phone=524411203041&text=Hola!&nbspme&nbsppueden&nbspayudar?">441-120-30-41</a></li>
                        <li><a href="#E-Mail de Soporte">E-Mail de Soporte</a></li>
                    </ul>
            </div>

            <div className="divAcercaDeNos">
                <h4>Acerca de nosotros</h4>
                    <ul className="ulAcercaDeNos">
                        <li><a href="#Información de la Empresa">Información de la Empresa</a></li>
                        <li><a href="#identidad de la Marca">Nosotros</a></li>
                    </ul>
            </div>
            </div>

        </footer>
    )
}

export default Footer