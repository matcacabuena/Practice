
import RoutesApp from "./routes";
import "./global.css"
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );

}

export default App;