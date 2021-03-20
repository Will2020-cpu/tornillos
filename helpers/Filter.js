import { useRouter } from 'next/router'

export function getRouterInicial(item) {
    const router = useRouter()
    if (router.query.filter_marca !== undefined && router.query.filter_largo !== undefined) {
        const objeto = {
            path: '/categorias/[categorias]',
            pathname: `/categorias/${router.query.categorias}`,
            query: {
                id: router.query.id,
                categorias: router.query.categorias,
                filter_marca: router.query.filter_marca,
                filter_largo: router.query.filter_largo,
                filter_diametro: item
            }
        }
        return objeto;
    } else if (router.query.filter_marca !== undefined) {
        const objeto = {
            path: '/categorias/[categorias]',
            pathname: `/categorias/${router.query.categorias}`,
            query: {
                id: router.query.id,
                categorias: router.query.categorias,
                filter_marca: router.query.filter_marca,
                filter_largo: router.query.filter_largo,
                filter_diametro: item
            }
        }
        return objeto;


    } else if (router.query.filter_largo !== undefined) {
        const objeto = {
            path: '/categorias/[categorias]',
            pathname: `/categorias/${router.query.categorias}`,
            query: {
                id: router.query.id,
                categorias: router.query.categorias,
                filter_marca: router.query.filter_marca,
                filter_largo: router.query.filter_largo,
                filter_diametro: item
            }
        }
        return objeto
    }

    else {
        const objeto = {
            path: '/categorias/[categorias]',
            pathname: `/categorias/${router.query.categorias}`,
            query: {
                id: router.query.id,
                categorias: router.query.categorias,
                filter_diametro: item,

            }
        }
        return objeto;
    }
}


export function getRouterMarca(item) {
    const router = useRouter()
    const objeto = {
        path: '/categorias/[categorias]',
        pathname: `/categorias/${router.query.categorias}`,
        query: {
            id: router.query.id,
            filter_largo:router.query.filter_largo,
            filter_diametro:router.query.filter_diametro,
            categorias: router.query.categorias,
            filter_marca: item,

        }
    }
    return objeto;

}
