import { useEffect } from "react";
import { useState } from "react"

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(!url) return;

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(`Erro ao buscar dados: ${response.statusText}`)
            }
            const result = await response.json();
            setData(result);
        } 
        catch(error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    };

    fetchData();

  },[url])

  return {data, error, loading};

}

export default useFetch
