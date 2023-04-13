import React, { useContext, useEffect } from 'react'
import './Product.css'

import { GlobalData } from '../Context'


const Product = () => {
    const { products, setproducts, setAddtocart, addtocart } = useContext(GlobalData)
    useEffect(() => {
        fetch(
            ' https://fakestoreapi.com/products'
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setproducts(data)
            })
    }, [])

    return (
        <div className='Product'>
            {products.map((ele) => {
                return (

                    <>

                        <div className="Card">
                            <div className="category">
                                <p>{ele && ele.category}</p>
                            </div>
                            <img src={ele && ele.image} alt="" />
                            <div className="title">
                                <p>{ele && ele.title}</p>
                            </div>

                            <p><span>PRICE :</span> $ {ele && ele.price} </p>


                            <button onClick={() => { setAddtocart([...addtocart, ele]) }}>Add To Cart</button>

                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Product

