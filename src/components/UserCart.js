import { useState, useEffect } from 'react'
import axios from 'axios'

function UserCart(props) {
    console.log(props)

    // const [cartObj, setCartObj] = useState('')

    // useEffect(() => {
    //         let username=localStorage.getItem("username")

    //     axios.get(`/user/getproducts/${username}`)
    //         .then(res => {
    //             setCartObj(res.data.message)
    //             console.log(res.data.message)
    //         })
    //         .catch(err => {
    //             console.log("err in reading cart", err)
    //             alert("Something went wrong in getting cart")
    //         })

    // }, [])

    return (
        <div>
            <table className="table text-center w-75 mx-auto">
                <thead>
                    <th>Recipe</th>
                    <th>Type</th>
                    <th>Image</th>
                </thead>
                <tbody>
                    {props.cartObj &&
                        props.cartObj.products.map((product, index) => {
                            return <tr>
                                <td>{product.recipename}</td>
                                <td>{product.foodtype}</td>
                                <td>
                                    <img src={product.productImage} width="60px" alt="" />
                                </td>
                            </tr>

                        })
                    }
                </tbody>
            </table>


        </div>
    )
}

export default UserCart
