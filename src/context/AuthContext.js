import { createContext, useContext } from "react"

export const AuthContext = createContext()
export const AuthContextProvider = ({children, value}) => {

    return (
    <AuthContextProvider value={value}>
        {children}
    </AuthContextProvider> )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}
