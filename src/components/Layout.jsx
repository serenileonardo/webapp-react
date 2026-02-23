import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <header className="bg-dark text-white p-3">
                <h1 className="text-center"> Movie App</h1>
            </header>


            <main className="container my-4">
                <Outlet />
            </main>


            <footer className="bg-light text-center p-3">
                <small> 2026 Movie App</small>
            </footer>
        </>
    );
};

