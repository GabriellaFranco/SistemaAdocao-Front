import { useEffect, useState } from "react"

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const auth = sessionStorage.getItem("auth");
        setIsAuthenticated(!!auth) //Converte para boolean
    }, [])

    const login = async (email, senha) => {
        setError(null);
        setLoading(true);

        const authHeader = "Basic " + btoa(email + ":" + senha); //Codifica as credenciais

        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Authorization": authHeader
                }
            });

            if (!response.ok) {
                throw new Error("Credenciais inválidas");
            }

            sessionStorage.setItem("auth", authHeader);
            setIsAuthenticated(true);
            return true
        }
        catch (error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    };

    const logout = () => {
        sessionStorage.removeItem("auth");
        setIsAuthenticated(false);
    }

    return {loading, error, isAuthenticated, login, logout}
}

export default useAuth
