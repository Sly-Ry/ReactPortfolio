import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Project({href, src, alt, iconId, icon, title, text, stack1, stack2, code, codeHref}) {
    return (
        <div className="proj card">
            <a href={href} className="image">
                <img src={src} alt={alt} className='card-img-top'/>
            </a>
            <div className="card-body">
                <div className="card-title d-flex align-items-center justify-content">
                    <FontAwesomeIcon id={iconId} className='i' icon={icon} />
                    <h4>{title}</h4>
                </div>
                <p className="card-text">{text}</p>
                <div className="stack d-flex align-items-center justify-content-center">
                    <h5>{stack1}</h5>
                    <h5>{stack2}</h5>
                </div>
                <div className="card-foot d-flex align-items-center justify-content-center">
                    <a href={codeHref}>
                        <h4>Code</h4>
                    </a>
                    <FontAwesomeIcon id='foot' icon={code} />
                </div>
            </div>
        </div>
    )
}