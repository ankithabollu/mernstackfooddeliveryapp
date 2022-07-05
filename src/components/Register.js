import { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { TestContext } from '../contexts/TestContext';

function Register() {

    const result1 = useContext(TestContext)
    console.log("result is ", result1)

    const { register, handleSubmit,formState: { errors } } = useForm();
    const [file, setFile] = useState(null)
    const history = useHistory();

    const onFormSubmit = (userObj) => {

        //create FormData obj
        let formData = new FormData();
        //add file(s) to formdata obj
        formData.append('photo', file, file.name)
        //add userObj to formData object
        formData.append("userObj", JSON.stringify(userObj))

        //post req
        
        axios.post("/user/createuser", formData)
            .then(res => {
                let resObj = res.data;
                alert(resObj.message)
                //navigate to login component
                history.push('/login')
            })
            .catch(err => {
                console.log(err);
                alert("something went wrong")
            })
                

    }


    //to get selected
    const onFileSelect = (e) => {

        setFile(e.target.files[0])
    }




    return (
              <div className="row mx-auto mt-5 pt-5">
           <div className='col-11 col-sm-8 col-md-6 mx-auto'>
                <h3 className='mx-auto ms-5 ps-5'>Register to view the food menu...</h3>
            <form className="w-75 mx-auto mt-5 card p-4" onSubmit={handleSubmit(onFormSubmit)}>
                <div >
                <label htmlFor="un">User Name</label>
                <input type="text" className="form-control mb-3"  {...register("username", { required: true })} placeholder="Username" />
                 {/* validation error on username */}
               
              {errors.username?.type === 'required' && <p className='text-danger fw-bold'>* Username required</p>}
              </div>
              <div>
                <input type="password" className="form-control mb-3"  {...register("password", { required: true })} placeholder="Password" />
                {/* validation error on email */}
              {errors.password?.type === 'required' && <p className='text-danger fw-bold'>* strong password required</p>}
              </div>
              <div>
                <input type="email" className="form-control mb-3"  {...register("email", { required: true })} placeholder="E-mail" />
                {/* validation error on email */}
              {errors.email?.type === 'required' && <p className='text-danger fw-bold'>* email required</p>}
              </div>
              <div>
                <input type="date" className="form-control mb-3"  {...register("dob")} placeholder="Date of birth" />
                </div>
               <div>
                <input type="file" name="photo" className="form-control mb-3" onChange={(e) => { onFileSelect(e) }} />
                </div>  

                <button className="btn btn-success mx-auto w-50">Register</button>
            </form>
            </div>
            </div>
      

    )
}

export default Register
