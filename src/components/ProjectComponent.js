import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ProjectComponent({href, src, alt, iconId, icon, title, text, stack1, stack2, code, codeHref}) {
    return (
        <div className="proj card" style={{ width: '30rem' }}>
            <a href={href}>
                <img
                    loading='lazy'  
                    src={src} 
                    alt={alt} 
                    className='card-img-top'
                />
            </a>
            <div className="card-body">
                <div className="card-header text-center dja border-bottom border-dark my-2">
                    <FontAwesomeIcon id={iconId} icon={code} className='i' />
                    <a href={codeHref}>
                        <h1 className='text-uppercase'>{title}</h1>
                    </a>
                </div>
                <div className="card-body">
                    <p className="card-text fs-5">{text}</p>
                </div>
            </div>
            <div className="card-foot row dja mb-4">
                <div className="col-4 text-center">
                    <h5 className='fs-4 fw-bold'>{stack1}</h5>
                </div>
                <div className="col-4 text-center">
                    <h5 className='fs-4 fw-bold'>{stack2}</h5>
                </div>
            </div>
        </div>
    )
}