import React, { createContext, useState } from "react"

export const AuthContext = createContext({})

function AuthProvider({children}) {
    const [percentage, setPercentage] = useState(0)


    return(
        <AuthContext.Provider value={{setPercentage, percentage}}>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthProvider