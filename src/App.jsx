import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import ReviewPage from "./components/ReviewForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies/:id" element={<MovieDetail />} />
                    <Route path="/review/:id" element={<ReviewPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;