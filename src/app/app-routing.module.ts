import { NgModule } from '@angular/core';
import { MainComponent } from "./main/main.component";
import { PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
