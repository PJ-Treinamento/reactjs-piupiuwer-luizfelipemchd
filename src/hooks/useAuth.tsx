import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { User } from "../models";
import api from "../services/api";

export interface IUserData{
    token: string;
    user: User;
}

interface IAuthContext{
    token: string;
    user: User;
    setUserData:  React.Dispatch<React.SetStateAction<IUserData>>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC = ({ children }) => {
    
    const [userData, setUserData] = useState<IUserData>(() => {
        const token = localStorage.getItem('@Piupiuwer:token');
        const user = localStorage.getItem('@Piupiuwer:user');

        if (user && token) {
            api.defaults.headers.authorization = `Bearer ${token}` 
            return { token, user: JSON.parse(user) };
        }

        return {} as IAuthContext;
    })
    
    useEffect( () => {
        const updateUser = async () =>{
            const userString = localStorage.getItem('@Piupiuwer:user')
            const user = userString ? JSON.parse(userString) : "";
            if(user && user != userData.user){
                const response: AxiosResponse<User[]> = await api.get(`/users?username=${user.username}`, {})
                setUserData( { ...userData, user: response.data[0] })
                localStorage.setItem("@Piupiuwer:user", JSON.stringify(user) )
            }
        }
        updateUser()
    }, [] )

    return(
        <AuthContext.Provider value={ { ...userData, setUserData }}>
            { children }
        </AuthContext.Provider>
    );
}

export default () => useContext(AuthContext)