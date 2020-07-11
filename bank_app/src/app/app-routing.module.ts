import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { EditHistoryComponent } from './edit-history/edit-history.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';


const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'home', component: HomeComponent},
  { path:'profile', component: ProfileComponent},
  { path:'history', component: HistoryComponent},
  { path:'life-cycle', component: LifecycleHooksComponent},
  { path:'animation-demo', component: AnimationDemoComponent},
  { path:'edit-history/:id', component: EditHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }