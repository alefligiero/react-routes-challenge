import { NavLink } from "react-router-dom";
import "./styles.css";

export default function NavBarProducts() {
  return (
    <div className="navbar-container mb-20">
      <nav className="navbar-products">
        <div className="navbar-products-item">
          <NavLink className={({ isActive }) => (isActive ? "menu-active" : "")} to={"computers"}>Computadores</NavLink>
        </div>
        <div className="navbar-products-item">
          <NavLink className={({ isActive }) => (isActive ? "menu-active" : "")} to={"eletronics"}>Eletrônicos</NavLink>
        </div>
        <div className="navbar-products-item">
          <NavLink className={({ isActive }) => (isActive ? "menu-active" : "")} to={"books"}>Livros</NavLink>
        </div>
      </nav>
    </div>
  );
}
