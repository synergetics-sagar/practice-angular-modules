import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';


const adminRoutes: Routes = [
  { path: '', component: AdminComponent } // Admin's default route
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule, RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
