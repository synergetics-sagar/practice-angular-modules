import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbaordComponent } from '../dashbaord/dashbaord.component';
import { RouterModule, Routes } from '@angular/router';

const dashboardRoutes: Routes = [
  { path: '', component: DashbaordComponent } // Dashboard's default route
];


@NgModule({
  declarations: [DashbaordComponent],
  imports: [
    CommonModule, RouterModule.forChild(dashboardRoutes)
  ]
})
export class DashboardModule { }
