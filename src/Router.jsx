import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import NotFound from "./pages/notFound/Notfound";

const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    );
}
export default Routing;