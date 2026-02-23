import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
    return (
        <BrowserRouter>
            <Layout>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies/:id" element={<MovieDetail />} />
                </Routes>

            </Layout>
        </BrowserRouter>
    );
}

export default App;