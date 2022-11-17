import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';

import { CommonModule } from '@angular/common';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/resources/helpers/authconfig.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { LoginComponent } from './components/views/login/login.component';
import { IntroComponent } from './components/views/intro/intro.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NewTransComponent } from './components/views/new-trans/new-trans.component';
import { TopNavComponent } from './components/layout/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    IntroComponent,
    NavBarComponent,
    FooterComponent,
    NewTransComponent,
    TopNavComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    FlexModule,
    FlexLayoutModule,
    LayoutModule,
    MatTableModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
