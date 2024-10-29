
import { NavLink } from "react-router-dom"
export default function NavLinks(){
    const navlinks = [
        {destination:"/about" ,name:"about"},
        {destination:"/ayhagah" ,name: "ayhagah"},
        {destination:"/login" ,name: "Login"}
        
    ]
    return(
        <div  >
            {
                navlinks.map((link)=>(
                    <NavLink className="mx-3 text-dark  " to={link.destination}>{link.name}</NavLink>
                ))
            }
        </div>
    )
}