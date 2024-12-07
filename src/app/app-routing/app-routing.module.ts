import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
    // {path: "dashboard", component: DashbaordComponent},
    // {path: "admin", component: AdminComponent}
    {path: "dashboard", loadChildren: ()=> import("../dashboard/dashboard.module").then(m=>m.DashboardModule)},
    {path: "admin", loadChildren: ()=> import("../admin/admin.module").then(m=>m.AdminModule)},
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
    // { path: '**', redirectTo: '/dashboard' } // Fallback route
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
