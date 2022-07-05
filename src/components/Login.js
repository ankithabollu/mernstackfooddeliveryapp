import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Login(props) {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const history = useHistory();

    const onFormSubmit = (credentials) => {

        // make post req
        axios.post(`/${credentials.type}/login`, credentials)
            .then(res => {
                //get response object
                let resObj = res.data;
                if (resObj.message === 'login-success') {
                    //save token in local storage
                    localStorage.setItem("token", resObj.token)
                    localStorage.setItem('username', resObj.username)
                    localStorage.setItem("user", JSON.stringify(resObj.userObj))
                    //update userloginstate
                    props.setUserLoginStatus(true)

                    if (credentials.type === "user") {
                        //navigate to user profile
                        history.push(`/userprofile/${resObj.username}`)
                    }

                    if (credentials.type === "admin") {
                        //navigate to user profile
                        history.push(`/adminprofile/${resObj.username}`)
                    }
                }
                else {
                    alert(resObj.message)
                }
            })
            .catch(err => {
                console.log("err in login",err)
                alert("something went wrong in login")
            })


    }




    return (
        <div className='mt-5 pt-5'>
           
        <form className="w-25 mx-auto mt-5 card mb-5 p-4" onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor="n">Select the type</label>
            <div className="form-check mt-2">
                <input className="form-check-input" type="radio" id="admin" {...register("type")} value="admin" />
                <label className="form-check-label" for="admin">
                    Admin
                </label>
            </div>
            <div className="form-check mb-3">
                <input className="form-check-input" type="radio" id="user" {...register("type")} value="user" />
                <label className="form-check-label" for="user">
                    User
                </label>
            </div>



            <div >
                {/* <label htmlFor="un">User Name</label> */}
                <input type="text" className="form-control mb-3"  {...register("username", { required: true })} placeholder="Username" />
                 {/* validation error on username */}
               
              {errors.username?.type === 'required' && <p className='text-danger fw-bold'>* Username required</p>}
              </div>
              <div>
                <input type="password" className="form-control mb-3"  {...register("password", { required: true })} placeholder="Password" />
                {/* validation error on email */}
              {errors.password?.type === 'required' && <p className='text-danger fw-bold'>* strong password required</p>}
              </div>

            <button className="btn btn-primary w-25 mb-3">Login</button>
        </form>
        <hr></hr>
        </div>
    )
}

export default Login
