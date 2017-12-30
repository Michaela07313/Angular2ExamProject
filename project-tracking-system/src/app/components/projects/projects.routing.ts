import { ProjectsListComponent } from "./projects-list/projects.list.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { ProjectCreateComponent } from "./project-create/project-create.component";
import { ProjectEditComponent } from "./project-edit/project-edit.component";
import { ProjectDeleteComponent } from "./project-delete/project-delete.component";

export const projectRoutes = [
  { path: '',  component: ProjectsListComponent },
  { path: 'details/:id', component: ProjectDetailsComponent },
  { path: 'create', component: ProjectCreateComponent },
  { path: 'edit/:id', component: ProjectEditComponent },
  { path: 'delete/:id', component: ProjectDeleteComponent }

]