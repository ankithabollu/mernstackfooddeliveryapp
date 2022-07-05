import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ViewProducts from './ViewProducts';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserCart from './UserCart'


function UserProfile() {

    let [productObj, setProductObj] = useState('')
    let [user, setUser] = useState('')

console.log("produ obj",productObj)
    const [cartObj, setCartObj] = useState('')

    useEffect(() => {
        let username = localStorage.getItem("username")

        axios.get(`/user/getproducts/${username}`)
            .then(res => {
                setCartObj(res.data.message)
                console.log(res.data.message)
            })
            .catch(err => {
                console.log("err in reading cart", err)
                alert("Something went wrong in getting cart")
            })

    }, [productObj.foodtype])


    //function to make post tp usercart api
    const addProductToCart = (productObj) => {
        //get username from localstorage
        let username = localStorage.getItem("username")
        //add username to product object
        //  productObj.username = username;
        let newObj = { username, productObj }

        console.log("product added by user ", newObj)
        // make post req
        axios.post("/user/addtocart", newObj)
            .then(res => {
                let responceObj = res.data
                setProductObj(productObj)
                alert(responceObj.message)
            })
            .catch(err => {
                console.log("err in adding to cart", err)
                alert("Something went wrong")
            })
    }





    //get username from url
    let paramsObj = useParams();//{username:"vikas"}

    useEffect(() => {
        //get userObj from localstorage
        let userObj = JSON.parse(localStorage.getItem('user'))
        setUser({ ...userObj })
    }, [paramsObj.username])

    //fetch userdata from api

    return (
        <div>
            <h5 className="text-end">Welcome ,<span className="text-info">{paramsObj.username}
            </span>
                <img src={user.profileImage} width="60px" alt="" />
            </h5>
            <div className='mt-5 mx-auto'>
            <BrowserRouter>
                <ul className="nav nav-pills nav-fill ms-5">
                <li className="nav-item">
                        <Link to="user-profile" className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">My profile</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/view-products" className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">View products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user-cart" className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                            <button className="btn btn-dark text-white"> Cart
                                <span className="badge bg-info m-1 text-dark">{cartObj && cartObj.products.length} </span>
                            </button>
                        </Link>

                    </li>

                </ul>

                <Switch >

                    <Route path="/user-cart">
                        <UserCart cartObj={cartObj} setCartObj={setCartObj} />
                    </Route>
                    <Route path="/view-products">
                        <ViewProducts addProductToCart={addProductToCart} />
                    </Route>

                </Switch>
            </BrowserRouter>
            </div>
        </div>
    )
}

export default UserProfile
