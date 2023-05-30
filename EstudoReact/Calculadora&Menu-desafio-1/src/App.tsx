import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HOME,
  CALCULADORA,
  GITFIND
} from "./routes/paths";
import Home from "./Home/index";
import Calculadora from "./Calculadora/index";
import GitFind from "./GitFind/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={CALCULADORA} element={<Calculadora />} />
            <Route path={GITFIND} element={<GitFind />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
