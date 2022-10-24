import React, { createContext, useState } from "react"

export const AuthContext = createContext({})

function AuthProvider({children}) {
    const [percentage, setPercentage] = useState(0)
    const [image, setImage] = useState('https://cdn-icons-png.flaticon.com/512/5987/5987462.png')


    return(
        <AuthContext.Provider value={{setPercentage, percentage, image, setImage}}>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthProvider