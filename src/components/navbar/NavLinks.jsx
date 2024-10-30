// NavLinks.js
import { NavLink } from "react-router-dom";
import "./NavLinks.css"; // Ensure this file is created with the styles

export default function NavLinks() {
  const navlinks = [
    { destination: "/about", name: "About" },
    { destination: "/volunteer-posts", name: "Posts" },
    { destination: "/login", name: "Login" },
    { destination: "/volunteering-register", name: "Want Voluteers?" ,styling:"bg-success rounded-pill p-3 " },
  ];

  return (
    <div>
      {navlinks.map((link) => (
        <NavLink key={link.name} className={`mx-3 custom-link ${link.styling}`} to={link.destination}>
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}
