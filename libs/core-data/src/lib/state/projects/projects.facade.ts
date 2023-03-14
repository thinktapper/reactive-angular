import { Injectable } from '@angular/core'
import { select, Store, ActionsSubject } from '@ngrx/store'
import {
  AddProject,
  DeleteProject,
  LoadProjects,
  selectAllProjects,
  selectCurrentProject,
  SelectProject,
  UpdateProject,
} from '@workshop/core-data'
import { Project } from '../../projects/project.model'
import { ProjectsState } from './projects.reducer'
import { Observable } from 'rxjs'
import { filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ProjectsFacade {
  projects$: Observable<Project[]>
  currentProject$: Observable<Project>

  constructor(private store: Store<ProjectsState>) {
    this.projects$ = store.pipe(select(selectAllProjects))
    this.currentProject$ = store.pipe(select(selectCurrentProject))
  }

  getProjects() {
    this.store.dispatch(new LoadProjects())
  }

  selectProject(project) {
    this.store.dispatch(new SelectProject(project.id))
  }

  createProject(project) {
    this.store.dispatch(new AddProject(project))
  }

  updateProject(project) {
    this.store.dispatch(new UpdateProject(project))
  }

  deleteProject(project) {
    this.store.dispatch(new DeleteProject(project))
  }
}
