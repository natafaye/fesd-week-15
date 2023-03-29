

export const deleteProduct = async (id) => {
    const response = await fetch("/products/" + id, {
        method: "DELETE"
    })
}