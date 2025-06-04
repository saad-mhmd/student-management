import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StudentsListComponent } from './students-list.component';
import { StudentFormComponent } from './student-form.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'students', component: StudentsListComponent },
  { path: 'students/new', component: StudentFormComponent },
  { path: 'students/:id/edit', component: StudentFormComponent },
];
