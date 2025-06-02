import { BrowserRouter,Routes,Route } from "react-router-dom";

import CoverPage from "./pages/CoverPage";

export default function App(){
    return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<CoverPage/>}  />
        </Routes>
       </BrowserRouter>
    );
}