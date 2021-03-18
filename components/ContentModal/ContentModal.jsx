import React, { useState } from 'react'
import Modal from 'react-modal'


const ContentModal = ({ children }) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="flex" onClick={() => setOpen(true)}>
                {children}
            </div>

            <Modal
                isOpen={open}
                onRequestClose={() => setOpen(false)}
                contentLabel="Post Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0, 0,0.5)',
                        zIndex: '999',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    content: {
                        maxWidth: '400px',
                        left: '50%',
                        top: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)'
                    }
                }}
            >
                <div className="p-6 flex flex-col space-y-4">
                    <h1 className="text-lg font-medium text-center">Contactar</h1>
                    <form className="flex flex-col space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-sm font-medium">Nombre</label>
                            <input type="text" placeholder="Nombre" className="p-2 rounded border focus:outline-none" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-sm font-medium">Numero de Contacto</label>
                            <input type="text" placeholder="Nombre" className="p-2 rounded border focus:outline-none" />
                        </div>
                        <button className="w-full bg-customRed p-2 text-white rounded">Enviar</button>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default ContentModal
