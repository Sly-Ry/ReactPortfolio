import { FormComponent } from "../../components/ContactComponents/FormComponent";
import { InfoComponent } from "../../components/ContactComponents/InfoComponent";

export function ContactLayout() {
    return (
        <>
            <div className="row dj" style={{width: '100vw', maxHeight: 750}}>
                <FormComponent />
                <InfoComponent />
            </div>
        </>
    )
}