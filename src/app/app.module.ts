import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { FullScreenLoadingComponent } from './features/login/components/fullScreenLoading/full-screen-loading.component';
import { LayoutLoginComponent } from './core/layouts/login/layoutLogin.component';
import { LayoutContainerComponent } from './core/layouts/container/container.component';
import { FormLoginComponent } from './features/login/components/form-login/form-login.component';
import { BurgerComponent } from './core/components/menu/burger/burger.component';
import { NavbarComponent } from './core/components/menu/navBar/navbar.component';
import { RightComponent } from './core/components/menu/rightNav/rightNav.component';
import { UserComponent } from './core/components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutLoginComponent,
    LayoutContainerComponent,
    LoginComponent,
    FormLoginComponent,
    FullScreenLoadingComponent,
    BurgerComponent,
    NavbarComponent,
    RightComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularToastifyModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule { }
