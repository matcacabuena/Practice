import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [signed, setSigned] = useState(false);


  /*useEffect(() => {
    const userToken = localStorage.getItem("token");
    const usersStorage = localStorage.getItem("users_bd");
    console.log(userToken.email)

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);*/



  /*const login = (email, password) => {
    
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        //localStorage.setItem("token", localStorage.getItem("token"));
        setUser({ email, password });
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      console.log(email)
      console.log(password)
      console.log(localStorage.getItem("token"))
      return "Usuário não cadastrado";
    }
  };*/

  const login = async (email, password) => {
    //const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

      //const newUser = [{ email, password }];
      //localStorage.setItem("users_bd", JSON.stringify(newUser));

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

  function getData() {
    const token = localStorage.getItem("token")
    fetch('https://m2devadmin.softkuka.com.br/api/Vendedor', {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => response.json())
      .then(console.log)
      .catch(mistake => console.log('Error: ', mistake))


  }

  return (
    <AuthContext.Provider
    value={{ user, signed, login}}
    >
      {children}
    </AuthContext.Provider>
  );
};