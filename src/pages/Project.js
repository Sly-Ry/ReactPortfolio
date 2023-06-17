import { useOutletContext, useParams } from "react-router-dom"

export function Project() {
    const { id } = useParams();
    return (
        <h1>Project {id}</h1>
    )
}