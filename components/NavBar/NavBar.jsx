import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'



const NavBar = () => {
    return (
        <>
            <div className="bg-customGray hidden lg:block">
                <div className="h-10 flex w-11/12 m-auto justify-between">
                    <nav className="flex h-full items-center space-x-2 nav">
                        <a href="#" className="text-white hover:text-red-400 transition duration-500"><FontAwesomeIcon icon={faMapMarkerAlt} /> Direccion </a>
                        <a href="#" className="text-white hover:text-red-400 transition duration-500"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="text-white hover:text-red-400 transition duration-500"><FontAwesomeIcon icon={faLinkedinIn} /> </a>
                        <a href="#" className="text-white hover:text-red-400 transition duration-500"><FontAwesomeIcon icon={faTwitter} /> </a>
                    </nav>

                    <nav className="flex h-full items-center space-x-2 nav">
                        <a href="#" className="text-white hover:text-red-400 transition duration-500"><FontAwesomeIcon icon={faPhoneAlt} /> Numero</a>
                        <a href="#" className="text-white hover:text-red-400 transition duration-500"><FontAwesomeIcon icon={faEnvelope} /> Correo </a>
                    </nav>
                </div>
            </div>
            <div className="bg-customGray top-0 sticky z-50">
                <div className="h-14 w-11/12 m-auto flex justify-between">
                    <nav className="h-full hidden lg:flex items-center  nav uppercase space-x-4">
                        <Link href="/"><a className="text-white hover:text-red-400 transition duration-500">Inicio</a></Link>
                        <Link href="/#categorias"><a className="text-white hover:text-red-400 transition duration-500">Categoria</a></Link>
                        <Link href="/#productos"><a className="text-white hover:text-red-400 transition duration-500">Productos</a></Link>
                        <Link href="/#whyus"><a className="text-white hover:text-red-400 transition duration-500">Porque nosotros</a></Link>
                    </nav>
                    <nav className="h-full hidden lg:flex items-center nav uppercase space-x-4">
                        <Link href="/#nosotros"><a className="text-white hover:text-red-400 transition duration-500">Sobre nosotros</a></Link>
                        <Link href="/#galeria"><a className="text-white hover:text-red-400 transition duration-500">Galeria</a></Link>
                        <Link href="/"><a className="text-white hover:text-red-400 transition duration-500">Videos</a></Link>
                        <Link href="/#contacto"><a className="text-white hover:text-red-400 transition duration-500">Contacto</a></Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar
