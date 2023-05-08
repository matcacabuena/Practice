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

  const createSeller = async ({name, cnpj, bussinessId, createdAt, updatedAt}) => {
    const token = localStorage.getItem("token")

    const createdSeller = await fetch(`https://m2devadmin.softkuka.com.br/api/Vendedor`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: {
        nome:name,
        cnpj,
        idEmpresa: bussinessId,
        criadoEm: createdAt,
        atualizadoEm: updatedAt
      }
    })
    .then(response => "vendedor criado com sucesso")
    .catch(mistake => console.log('Error: ', mistake))

    return createdSeller
  }

  return (
    <AuthContext.Provider
    value={{ user, signed, login, sellerList, searchSeller, createSeller}}
    >
      {children}
    </AuthContext.Provider>
  );
};