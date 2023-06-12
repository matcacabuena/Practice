import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

const useAuth = () => {
  const context = useContext(AuthContext);
  console.log('contexto: ', context)
  return context;
};

export default useAuth;