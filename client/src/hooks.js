import { useEffect, useState } from "react";


export function useFetch(url, initialData=undefined) {
    const [data, setData] = useState(initialData)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => setError(err))
    }, [])
    return [data, error];
}
