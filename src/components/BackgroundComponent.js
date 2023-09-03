import bg from '../assets/images/bg1.jpg';

export function BgImageComponent() {
    return (
        <>
            <img src={bg} alt="flying in the cotten candy clouds" className="fixed-top" style={{minWidth: '100vw', zIndex: -9999}}/>
        </>
    )
}