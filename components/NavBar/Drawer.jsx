import React, { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const [isOpen,setIsOpen] = useState(false)

    return (
        <Fragment>
            <div className="md:hidden">
                <button onClick={() => setIsOpen(true)}>
                    <span className="sr-only">Open Menu</span>
                        <FontAwesomeIcon icon={faBars} className="text-white"/>
                </button>
            </div>

            <Transition 
                show={isOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="absolute opacity-100 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg">Logo</h4>
                                </div>
                                <div className="-mr-2">
                                    <button onClick={()=> setIsOpen(false)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close Menu</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <Link href="/" onClick={()=>setIsOpen(false)}><a className="text-black">Incio</a></Link>
                                    <Link href="/#categorias" onClick={()=> setIsOpen(false)}><a className="text-black">Categoria</a></Link>
                                    <Link href="/#productos" onClick={()=>setIsOpen(false)}><a className="text-black">Productos</a></Link>
                                    <Link href="/#whyus" onClick={()=>setIsOpen(false)}><a className="text-black">Contacto</a></Link>
                                    <Link href="/#nosotros" onClick={()=>setIsOpen(false)}><a className="text-black">Nosotros</a></Link>
                                    <Link href="/#galeria" onClick={()=>setIsOpen(false)}><a className="text-black">Galeria</a></Link>
                                    <Link href="/#contacto" onClick={()=>setIsOpen(false)}><a className="text-black">Contacto</a></Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </Transition>
        </Fragment> 
    )
}

export default Sidebar