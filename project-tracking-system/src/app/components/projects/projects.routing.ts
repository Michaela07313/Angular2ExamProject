import { ProjectsListComponent } from "./projects-list/projects.list.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";

export const projectRoutes = [
  { path: '',  component: ProjectsListComponent },
  { path: 'details/:id', component: ProjectDetailsComponent }
]