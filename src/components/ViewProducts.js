import { useEffect, useState } from 'react'
import axios from 'axios'

function ViewProducts(props) {

    const [products, setProducts] = useState('')

    useEffect(() => {
        axios.get('/product/viewproducts')
            .then(res => {
                setProducts(res.data.message)
            })
            .catch(err => {
                console.log("err in get products ", err)
                alert("Something went wrong")
            })
    }, [])


    return (
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-5">
            {products &&
                products.map((product, index) => {
                    return (
                        <div class="col" key={index}>
                            <div class="card shadow hover-zoom">
                                <img src={product.productImage} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{product.recipename}</h5>
                                    <p class="card-text">Price: {product.price}/-</p>
                                    <p class="card-text">{product.description}</p>
                                    <button className="btn btn-primary float-end" onClick={()=>props.addProductToCart(product)}>Add to cart</button>
                                </div>

                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default ViewProducts
