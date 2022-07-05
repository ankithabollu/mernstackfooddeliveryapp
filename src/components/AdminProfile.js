import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddProduct from './AddProduct'
import ViewProducts from './ViewProducts'


function AdminProfile() {
    return (
        <div className="mt-5 mx-auto">
        <BrowserRouter>
            <ul className="nav nav-pills nav-fill ms-5">
            <li className="nav-item">
                    <Link to="/admin-profile" className="nav-link w-50 text-dark mt-5" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">My profile</Link>
                </li>
                <li className="nav-item">
                    <Link to="/add-product" className="nav-link w-50 text-dark mt-5" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Add product</Link>
                </li>
                <li className="nav-item">
                    <Link to="/view-products" className="nav-link w-50 text-dark mt-5" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">View products</Link>
                </li>

            </ul>

            <Switch >
                 
                 <Route path="/add-product">
                    <AddProduct />
                </Route>
                <Route path="/view-products">
                    <ViewProducts />
                </Route>

            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default AdminProfile
