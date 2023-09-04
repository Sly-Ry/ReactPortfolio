export function InfoLinkComponent({icon, icon2, htmlFor, title, src}) {
    return (
        <>
            <div className="da">
                <div className={icon}>
                    <i className={icon2}></i>
                </div>
                <div className='c_info fs-5 d-flex'>
                    <label htmlFor={htmlFor} className="email fs-3">
                        {title} 
                    </label>
                    <p className="fs-4">{src}</p>
                </div>
            </div>
            <hr/>
        </>
    )
}