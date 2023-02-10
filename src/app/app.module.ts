import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulairComponent } from './formulair/formulair.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../service/AuthGuard";

const routes:Routes = [
  {
    path:"login",
    component:FormulairComponent
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[AuthGuard]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    FormulairComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
