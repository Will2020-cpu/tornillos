import Head from "next/head"
import styles from '../../styles/pago.module.css'
import Link from 'next/link'


const Pago = (props) => {
    console.log(props.datos)
    return (
        <>
            <Head>
                <title>Pago</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.contenedor}>
                        <i className="checkmark">✓</i>
                    </div>
                    <h1>Pago Realizado con exito</h1>
                    <p>Enseguida nos ponemos en contacto al numero {props.datos.data.payment_method.phone_number}</p>
                    <div className="text-center mt-10">
                        <Link href="/">
                            <a className="underline text-blue-500">Volver a siguer gastando</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}


Pago.getInitialProps = async function (context) {
    const { id,pago} = context.query;
    const resDatos = await fetch(
        `https://sandbox.wompi.co/v1/transactions/${id}`
    )
    const datos = await resDatos.json()

    const newCliente = {
        id:datos.data.id,
        email:datos.data.merchant.email,
        numero:datos.data.payment_method.phone_number,
        producto:pago
    }
     await fetch(
        `http://localhost:5000/api/clientes/add`,{
            method:'POST',
            body:JSON.stringify(newCliente),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }
    )
    await fetch(
        `http://localhost:5000/services/notificaciones/new-message`,{
            method:'POST',
            body:JSON.stringify({message:'Nuevo Cliente'}),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }
    )

    return {
        datos: datos
    }
}



export default Pago