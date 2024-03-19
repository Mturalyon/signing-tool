import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function Header() {
    
        return (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                </Route>
              </Routes>
            </BrowserRouter>
          );
    
    
}

export default Header;