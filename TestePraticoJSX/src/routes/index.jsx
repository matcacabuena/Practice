import { BrowserRouter, Route, Routes, } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AddSeller from "../pages/AddSeller";

// eslint-disable-next-line react/prop-types
const Private = ({ Item }) => {
    const { tokenContext } = useAuth();
    
    return tokenContext ? <Item /> : <Login />;
  };

const RoutesApp = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route path="/" element={<Login />} />
                    <Route exact path="/addseller" element={<Private Item={AddSeller}/>} />
                    <Route path="*" element={<Login />} />
                </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp;