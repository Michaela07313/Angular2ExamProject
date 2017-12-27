import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { projectComponents } from "./index";
import { projectRoutes } from './projects.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(projectRoutes)
  ],
  declarations: [
    ...projectComponents
  ]
})
export class ProjectsModule {  }