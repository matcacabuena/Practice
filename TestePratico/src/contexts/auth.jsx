/* eslint-disable no-unused-vars */
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

  const sellerList = async ({page}) => {
    const token = localStorage.getItem("token")
    const rs = await fetch(`https://m2devadmin.softkuka.com.br/api/Vendedor${ page && `?page=${page}&recordsPerPage=10`}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => response.json())
      .catch(mistake => console.log('Error: ', mistake))

      return rs;
  }

  const searchSeller = async ({search}) => {
    const token = localStorage.getItem("token")
    const rs = await fetch(`https://m2devadmin.softkuka.com.br/api/Vendedor${search && `?search=${search}`}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => response.json())
      .catch(mistake => console.log('Error: ', mistake))

      return rs;
  }

  const addSeller = async (name, cnpj, businessId, createdAt, updatedAt) => {
    const token = localStorage.getItem("token")
    console.log(name)
    const rs = await fetch(`https://m2devadmin.softkuka.com.br/api/Vendedor`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome:name,
        cnpj,
        idEmpresa: businessId,
        criadoEm: createdAt,
        atualizadoEm: updatedAt
      }),
    })
    .then(response => console.log(response))
    .catch(mistake => console.log('Error: ', mistake))

    return rs
  }

  return (
    <AuthContext.Provider
    value={{ user, signed, login, sellerList, searchSeller, addSeller}}
    >
      {children}
    </AuthContext.Provider>
  );
};