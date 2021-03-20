export async function FilterLlamadas(filter_diametro, filter_largo, filter_marca, id) {
    if (filter_diametro !== undefined && filter_largo !== undefined) {
        const productosRes = await fetch(
            `http://localhost:5000/api/tipos/categoria/${id}?filter_diametro=${filter_diametro}&filter_largo=${filter_largo}`,
        )

        const productos = await productosRes.json()
        return {
            productos,
        }


    } else if (filter_diametro !== undefined) {
        const productosRes = await fetch(
            `http://localhost:5000/api/tipos/categoria/${id}?filter_diametro=${filter_diametro}`,
        )
        const productos = await productosRes.json()
        return productos;

    } else if (filter_diametro !== undefined && filter_marca !== undefined) {
        const productosRes = await fetch(
            `http://localhost:5000/api/tipos/categoria/${id}?filter_diametro=${filter_diametro}&filter_marca=${filter_marca}`,
        )
        const productos = await productosRes.json()
        return productos;

    } else if (filter_marca !== undefined) {
        const productosRes = await fetch(
            `http://localhost:5000/api/tipos/categoria/${id}?filter_marca=${filter_marca}`,
        )
        const productos = await productosRes.json()
        return productos;
    
    }else if(filter_largo !== undefined){
        const productosRes = await fetch(
            `http://localhost:5000/api/tipos/categoria/${id}?filter_largo=${filter_largo}`,

        )
        const productos = await productosRes.json()
        return(productos)
    } 

    else {
        const resProductos = await fetch(
            `http://localhost:5000/api/productos/categoria/${id}`
        )
        const productos = await resProductos.json()
        return productos;
    }

}