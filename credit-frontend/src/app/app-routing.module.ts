import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesListComponent } from './pages/classes-list/classes-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, children: [
      { path: '', component: ClassesListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
