import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
    const [ response, setResponse ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                setTimeout( async () =>  {
                    const res = await axios.get (url);
                    setResponse(res.data);
                    setLoading(false);
                }, 4000)
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }
        fetch();
    }, [url]);

    return { response, loading, error };
}

export default useAxios;