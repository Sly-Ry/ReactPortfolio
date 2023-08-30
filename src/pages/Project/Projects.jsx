import { ProjectLayout } from '../../layouts/ProjectLayout'
import './Projects.css'

export function Projects() {
    return (
        <>
            <div id='projects' className="container-fluid dj" style={{ minHeight: '100vh' }}>
                <ProjectLayout />
            </div>
        </>
    )
}