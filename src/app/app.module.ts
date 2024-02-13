import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import {CommonModule} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule} from '@angular/material/paginator';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {MatSelectModule} from "@angular/material/select";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { ContentComponent } from './components/content/content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContentComponent,
    DashboardComponent,
    PageNotFoundComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    MatSelectModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    SidebarComponent,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
