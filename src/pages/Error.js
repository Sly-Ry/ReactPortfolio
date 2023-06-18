import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Error() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        }, 1000);
    }, [navigate]);
    

    return <h1>Page Not Found</h1>
}