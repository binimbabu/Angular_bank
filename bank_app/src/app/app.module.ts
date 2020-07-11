import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HistoryComponent } from './history/history.component';
import { EditHistoryComponent } from './edit-history/edit-history.component';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { NgContentExampleComponent } from './ng-content-example/ng-content-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    HighlightDirective,
    HistoryComponent,
    EditHistoryComponent,
    LifecycleHooksComponent,
    NgContentExampleComponent,
    NgSwitchExampleComponent,
    CustomPipePipe,
    AnimationDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
