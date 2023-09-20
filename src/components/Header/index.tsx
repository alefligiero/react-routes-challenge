import { NavLink } from "react-router-dom";
import "./styles.css";
import { Link } from "react-router-dom";
import homeImg from "../../assets/home.svg"

export default function Header() {
    return (
        <header className="header">
            <nav className="navbar site-container">
                <div className="navbar-items">
                    <div className="navbar-item">
                        <NavLink className={({ isActive }) => (isActive ? "menu-active" : "")} to={"/"}>
                            Início
                        </NavLink>
                    </div>
                    <div className="navbar-item">
                        <NavLink className={({ isActive }) => (isActive ? "menu-active" : "")} to={"/products"}>
                            Produtos
                        </NavLink>
                    </div>
                    <div className="navbar-item">
                        <NavLink className={({ isActive }) => (isActive ? "menu-active" : "")} to={"/about"}>
                            Sobre nós
                        </NavLink>
                    </div>
                </div>
                <Link to={"/"}>
                    <img src={homeImg} alt="Home" />
                </Link>
            </nav>
        </header>
    );
}
