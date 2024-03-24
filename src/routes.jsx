import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/home'
import Ods from './pages/ods'
import Minhapagina from './pages/minhapagina'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/ods" element={ <Ods /> }></Route>
                <Route path="/minhapagina" element={ <Minhapagina /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes