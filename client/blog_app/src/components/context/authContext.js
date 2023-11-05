//the context is created to be able to use our user state anywhere in the app
//global context
import { createContext } from "react";

export const AuthContext = createContext();

//children: rep our component to be wrap with the context provider: in the case, the app component
export const AuthContextProvider = ({ children }) => {};
