interface ProductProps {
    params: {
        data: string[]
    }
}

export default function Product({ params }: ProductProps) {
    const [productId, size, color] = params.data

    return (
        <ul>
            <li>Produto: {productId}</li>
            <li>Size: {size}</li>
            <li>Color: {color}</li>
        </ul>
    )
}