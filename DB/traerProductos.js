
export const traerProductos = async() =>{
    const response = await fetch(`./DB/productos.json`)
    const data = await response.json()
    return data
}  