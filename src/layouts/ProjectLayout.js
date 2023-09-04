import { ProjectComponent } from '../components/ProjectComponent'
import { projectData } from '../data/projectData';

export function ProjectLayout() {
    return (
        <>
            <div id='projrow' className="row g-4 da" style={{minHeight: '100vh'}}>
                {
                    projectData.map(items => {
                        return (
                            <> 
                                <div className="project col-12 col-sm-10 col-md-8 col-lg-6 col-xxl-4 dj">            
                                    <ProjectComponent 
                                        key={items.key}
                                        id={items.id}
                                        href={items.href}
                                        src={items.src}
                                        alt={items.alt}
                                        iconId={items.iconId}
                                        title={items.title}
                                        text={items.text}
                                        stack1={items.stack1}
                                        stack2={items.stack2}
                                        code={items.code}
                                        codeHref={items.codeHref}
                                    />
                                </div>
                            </>
                        )
                    })
                }
                </div>
            
        </>
    )
}