import { NavLink, Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
const MainLayouts = () => {
    return (
        <div>
            <section className="flex justify-around  font-semibold bg-pink-500 py-6 shadow-xl">
                <div>
                    <h2 className="text-4xl font-bold">Amazon</h2>
                </div>
                <nav>
                    <ul className="flex gap-6">
                        {/* <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/dashboard">Dashboard</a></li> */}
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-sky-400 p-2 rounded-lg" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-sky-400 p-2 rounded-lg " : ""
                            }
                        >
                            Product
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-sky-400 p-2 rounded-lg " : ""
                            }
                        >
                            Dashboard
                        </NavLink>
                    </ul>
                </nav>
            </section>


            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>


        </div>
    );
};

export default MainLayouts;