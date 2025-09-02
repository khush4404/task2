import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"

const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/spa-form" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes