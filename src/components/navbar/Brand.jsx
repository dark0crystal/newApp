import { NavLink } from "react-router-dom"
import "./NavLinks.css";
export default function Brand(){
    return(
        <div>
            <NavLink to='/' className="mx-3 text-dark custom-link">
                Volunteer
            </NavLink>
        </div>
    )
}