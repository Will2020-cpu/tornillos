import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'


const Footer = () =>{
    return(
        <footer className="w-full heroBanner bg-gray-50">
        <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-2 border-b p-8 w-full lg:w-11/12 m-auto">
                <div className="">
                    <h1 className="font-bold uppercase">Enlaces disponibles</h1>
                    <ul>
                        <li className="uppercase text-gray-600 hover:text-red-500 transition duration-500"><Link href="/"><a>Inicio</a></Link></li>
                        <li className="uppercase text-gray-600 hover:text-red-500 transition duration-500"><Link href="/#categoria"><a>Categoria</a></Link></li>
                        <li className="uppercase text-gray-600 hover:text-red-500 transition duration-500"><Link href="/#productos"><a>Productos</a></Link></li>
                        <li className="uppercase text-gray-600 hover:text-red-500 transition duration-500"><Link href="/#whyus"><a>Porque nosotros</a></Link></li>
                        <li className="uppercase text-gray-600 hover:text-red-500 transition duration-500"><Link href="/#nosotros"><a>Nosotros</a></Link></li>
                        <li className="uppercase text-gray-600 hover:text-red-500 transition duration-500"><Link href="/#galeria"><a>Galeria</a></Link></li>
                        <li className="uppercase text-gray-600 hover:text-red-500 transition duration-500"><Link href="/#contacto"><a>Contacto</a></Link></li>
                    </ul>
                </div>
                <div className="">
                    <h1 className="font-bold uppercase">Contacto</h1>
                    <ul>
                        <li className="text-gray-600">numero</li>
                        <li className="text-gray-600">correo</li>
                    </ul>
                </div>

                <div className="">
                    <h1 className="font-bold uppercase">Redes Sociales</h1>
                    <ul className="flex space-x-2">
                        <li className=""><a href="#"><FontAwesomeIcon icon={faFacebook} size="1x"/></a></li>
                        <li className=""><a href="#"><FontAwesomeIcon icon={faInstagram} size="1x"/></a></li>
                        <li className=""><a href="#"><FontAwesomeIcon icon={faTwitter} size="1x"/></a></li>
                    </ul>
                </div>

                <div className="">
                    <h1 className="font-bold uppercase">Metodos de pago</h1>
                    <img className="h-10" src="https://wompi.co/wp-content/themes/wp-theme-wompi/dist/images/home/payment-methods/ico_boton_bancolombia.png" alt="wompi"/>

                </div>
            </div>
            <div className="flex items-center justify-center h-full">
                <h1 className="text-sm font-medium">&copy; Copyrights 2021 - 2022.zuky tech.All Rights Reserved.</h1>
            </div>
        </div>
    </footer>
    )
}


export default Footer