import { useEffect, useState } from "react"

const usePost = (url) => {
    const [loading, setLoading] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [responseError, setResponseError] = useState(null);
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const storedAuth = sessionStorage.getItem("auth");
        setAuth(storedAuth);
    },[]);

    const postData = async (body) => {
        setLoading(null);
        setResponseData(null);
        setResponseError(null);

        try {
            const headers = {"Content-Type": "application/json"};

            if (!url.includes("/usuarios") && auth) {
                headers["Authorization"] = auth;
            } else if (!url.includes("/usuarios") && !auth) {
                throw new Error("Usuário não autenticado");
            }

            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${response.statusText}`);
            }

            const result = await response.json();
            setResponseData(result);
        }
        catch (error) {
            setResponseError(error.message);
        }
        finally {
            setLoading(false);
        }

    };

    return {loading, responseData, responseError, postData}
  
}

export default usePost
