import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store'

import * as fromCustomers from './customers/customers.reducer'
import * as fromProjects from './projects/projects.reducer'

// Updated the shape of the entire application state
export interface AppState {
  customers: fromCustomers.CustomersState
  projects: fromProjects.ProjectsState
}
// Add in feature reducer into combined reducer
export const reducers: ActionReducerMap<AppState> = {
  customers: fromCustomers.customersReducer,
  projects: fromProjects.projectsReducers,
}

// -------------------------------------------------------------------
// PROJECTS SELECTORS
// -------------------------------------------------------------------
export const selectProjectsState =
  createFeatureSelector<fromProjects.ProjectsState>('projects')

export const selectProjectIds = createSelector(
  selectProjectsState,
  fromProjects.selectProjectIds
)
export const selectEntities = createSelector(
  selectProjectsState,
  fromProjects.selectProjectEntities
)
export const selectAllProjects = createSelector(
  selectProjectsState,
  fromProjects.selectAllProjects
)

// -------------------------------------------------------------------
// CUSTOMERS SELECTORS
// -------------------------------------------------------------------
export const selectCustomersState =
  createFeatureSelector<fromCustomers.CustomersState>('customers')

export const selectAllCustomers = createSelector(
  selectCustomersState,
  fromCustomers.selectAllCustomers
)
