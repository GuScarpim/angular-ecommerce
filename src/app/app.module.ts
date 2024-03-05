import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './features/home/home.component'
import { LoginComponent } from './features/login/login.component'
import { LayoutComponent } from './core/layouts/login/layoutLogin.component'
import { FormLoginComponent } from './features/login/components/form-login/form-login.component'


@NgModule({
  declarations: [AppComponent, HomeComponent, LayoutComponent, LoginComponent, FormLoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
