import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { Com1Component } from './com1/com1.component'
import { Com2Component } from './com2/com2.component'

import { TitleService } from './services/title.service'

const appRoutes: Routes = [
  { path: 'com1', component: Com1Component, data: {  title: 'qComponent1' } },
  { path: 'com2', component: Com2Component, data: {  title: 'qComponent2' } }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, Com1Component, Com2Component ],
  bootstrap:    [ AppComponent ],
  providers:    [ TitleService ]
})
export class AppModule { }
