import { Route, Routes } from 'react-router-dom';
// import { ProjectLayout } from './components/ProjectLayout'
import { Projects } from './pages/Projects'
import { Project } from './pages/Project';

export function ProjectRoutes() {
    return (
        <>
            {/* <ProjectLayout /> */}
            <Routes>
                <Route index element={<Projects />}/>
                <Route path=':id' element={<Project />}/>
            </Routes>
        </>
    )
}

