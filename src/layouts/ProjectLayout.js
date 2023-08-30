import { ProjectComponent } from '../components/ProjectComponent'
import { projectData } from '../data/projectData';

export function ProjectLayout() {
    return (
        <>
            <div id='projectrow' className="row da">
                {
                    projectData.map(items => {
                        return (
                            <> 
                                <div className="col col-sm-10 col-md-8 col-xl-6 col-xxl-4 py-3 djea">            
                                    <ProjectComponent 
                                        key={items.key}
                                        id={items.id}
                                        href={items.href}
                                        src={items.src}
                                        alt={items.alt}
                                        iconId={items.iconId}
                                        icon={items.icon}
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