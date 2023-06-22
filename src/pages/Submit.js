import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Submit() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        }, 3000);
    }, [navigate]);
    

    return <h1 className="submit-comment">Your message has been successful sent! I'll be in touch.</h1>
}