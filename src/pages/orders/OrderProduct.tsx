const OrderProduct = (props: { id: number, name: string, price: number }) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.price}</div>
        </div>
    )
}

export default OrderProduct