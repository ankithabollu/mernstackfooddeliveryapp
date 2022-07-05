import { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function AddProduct() {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const [file, setFile] = useState(null)
    const history = useHistory();
    const onFormSubmit = (productObj) => {

        //create FormData obj
        let formData = new FormData();
        // //add file(s) to formdata obj
        formData.append('photo', file, file.name)
        //add userObj to formData object
        formData.append("productObj", JSON.stringify(productObj))

        //post req
        axios.post("/product/createproduct", formData)
            .then(res => {
                let resObj = res.data;
                alert(resObj.message)
                //navigate to login component
                history.push('/view-products')
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

        <form className="card shadow w-25 mx-auto mt-5 p-3" onSubmit={handleSubmit(onFormSubmit)}>
            <input type="text" className="form-control mb-3"  {...register("recipename", { required: true })} placeholder="recipename" />
               
            {errors.recipename?.type === 'required' && <p className='text-danger fw-bold'>* recipename required</p>}
            <input type="text" className="form-control mb-3"  {...register("foodtype", { required: true })} placeholder="food type" />
            {errors.foodtype?.type === 'required' && <p className='text-danger fw-bold'>* Food type required</p>}
            <input type="number" className="form-control mb-3"  {...register("price", { required: true })} placeholder="Price" />
            {errors.price?.type === 'required' && <p className='text-danger fw-bold'>* Food price required</p>}
            <textarea type="text" className="form-control mb-3"  {...register("description")} placeholder="description" />

            <input type="file" name="photo" className="form-control mb-3" onChange={(e) => { onFileSelect(e) }} />
           
            <button className="btn btn-success w-25">Add product</button>
        </form>


    )
}

export default AddProduct
