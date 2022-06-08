import React from "react";
import { fireEvent, prettyDOM, render } from "@testing-library/react";
import LoginScreen from "../../components/09-useContext/screen/LoginScreen";
import UserContext from "../../components/09-useContext/context/UserContext";

describe("Prob", () => {

  const setUser = jest.fn()
  let componente
  beforeEach(()=>{
    componente = render(
     <UserContext.Provider
       value={{
         user: {
           name: "ayuda",
           email: "edqw",
         },
         setUser
       }}
     >
       <LoginScreen />
     </UserContext.Provider>
   );
  })
  
  test("login", () => {
    console.log(prettyDOM(componente.container));
  });
  
  test("ejecutar el boton agregar user", () => {
    
    const button = componente.getByText("Agregar User")
    fireEvent.click(button)
    expect(setUser).toHaveBeenCalledTimes(1)
  });
});
