import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { MenuMain2Component } from './menu-main2/menu-main2.component';

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'menu-main', component: MenuMainComponent, data: { text: 'Menu Main' } },
  { path: 'sign-up', component: SignUpComponent, data: { text: 'Sign up' } },
  { path: 'about-us', component: AboutUSComponent, data: { text: 'About US' } },
  { path: 'menu-main2', component: MenuMain2Component, data: { text: 'Menu Main 2' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
