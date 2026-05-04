import { useEffect, useState } from "react";

export default function useDate() {
    const [dataAttuale, setDataAttuale] = useState(new Date())

    useEffect(() => {
        const intervallo = setInterval(() => {
            setDataAttuale(new Date())
        }, 1000);
        return () => {
            clearInterval(intervallo)
        }
    }, [])
    return dataAttuale
}