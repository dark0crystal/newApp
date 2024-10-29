import Brand from "./Brand";
import NavLinks from "./NavLinks";

export default function Navbar(){
    return(
        <div className="d-flex justify-content-between bg-light w-75 mt-3 p-4 h5 rounded-pill">
           <Brand/>
           <NavLinks/>
        </div>
    )
}