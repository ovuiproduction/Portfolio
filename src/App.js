import { BrowserRouter,Routes,Route } from "react-router-dom";

import CoverPage from "./pages/CoverPage";
import ProjectPage from "./pages/ProjectPage";

export default function App(){
    return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<CoverPage/>}  />
            <Route path="/my-work" element={<ProjectPage/>} />
        </Routes>
       </BrowserRouter>
    );
}