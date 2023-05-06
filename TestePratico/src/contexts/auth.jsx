import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [signed, setSigned] = useState(false);
  const [sellers, setSellers] = useState([])

  const login = async (email, password) => {

      const rs = await fetch("https://m2devadmin.softkuka.com.br/api/Login", {
        method: "POST",
        body: JSON.stringify({
          email,
          pwd: password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => response.json())
        .catch(error => ("Fetch Error: " + error))
        
        if(!rs?.status) {
          localStorage.setItem("token", rs.token)
          setSigned(true)
        }

      return !rs?.status;
  };

  const sellerList = async () => {
    const token = localStorage.getItem("token")
    const rs = await fetch('https://m2devadmin.softkuka.com.br/api/Vendedor', {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => response.json())
      // .then(response => setSellers(response))
      .catch(mistake => console.log('Error: ', mistake))
      
      return rs;
  }

  return (
    <AuthContext.Provider
    value={{ user, signed, login, sellerList}}
    >
      {children}
    </AuthContext.Provider>
  );
};