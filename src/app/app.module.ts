import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {NavComponent} from './nav/nav.component';
import {MainComponent} from './main/main.component';
import {AsideComponent} from './aside/aside.component';
import {FooterComponent} from './footer/footer.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {RegistrationComponent} from './registration/registration.component';
import {FormsModule} from "@angular/forms";
import {UserFormComponent} from "./user-form/user-form.component";
import { UserInfoComponent } from './user-info/user-info.component';
import { UserPhotoComponent } from './user-photo/user-photo.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    AsideComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    RegistrationComponent,
    UserFormComponent,
    UserInfoComponent,
    UserPhotoComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
