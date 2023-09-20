import { Outlet } from "react-router-dom";
import NavBarProducts from "../../../components/NavBarProducts";

export default function Products() {
    return (
        <>
            <main>
                <section>
                    <NavBarProducts />
                </section>
            </main>
            <Outlet />
        </>
    );
}