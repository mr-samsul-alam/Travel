import { createContext } from "react"; 
import useFireBase from "../Hooks/UseFireBase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const allContexts = useFireBase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;