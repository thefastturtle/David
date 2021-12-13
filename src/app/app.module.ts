import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { IgxButtonGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxInputGroupModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { MenuMain2Component } from './menu-main2/menu-main2.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuMainComponent,
    SignUpComponent,
    AboutUSComponent,
    MenuMain2Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    FormsModule,
    IgxInputGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
