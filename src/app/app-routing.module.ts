import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Com1Component } from './com1/com1.component'
import { Com2Component } from './com2/com2.component'
 
 
const routes: Routes = [
  {path: 'com1', component:Com1Component},
  {path: 'com2', component:Com2Component}

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }