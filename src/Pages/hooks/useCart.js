import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb"
// import { getStoredCart } from "../utilities/fakedb"

const useCart = () => {
    const [cart, setCart] = useState([])
    
    useEffect(() => {
        const savedCart = getStoredCart()
        const keys = Object.keys(savedCart);
        fetch('http://localhost:5000/tours/byKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(tours => {
            console.log(tours)
                if(tours.length){
                // const savedCart = getStoredCart()
                const storedCart = [];
                for(const key in savedCart){
                    const addedTour = tours.find(tour => tour._id === key)
                    if(addedTour){
                        const quantity = savedCart[key];
                        addedTour.quantity = quantity;
                        storedCart.push(addedTour)
                    }
                }
                setCart(storedCart)
                }
        })
    },[])

    return [cart, setCart]
}

export default useCart