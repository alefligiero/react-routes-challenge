import { Outlet } from "react-router-dom";
import NavBarProducts from "../../../components/NavBarProducts";

export default function Products() {
  return (
    <>
      <main>
        <section className="site-container mt-20">
          <NavBarProducts />
          <Outlet />
        </section>
      </main>

    </>
  );
}
