import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {StorageServiceModule} from 'angular-webstorage-service';
import {BrowserModule} from '@angular/platform-browser';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  imports: [
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      ComponentsModule,
      RouterModule,
      AppRoutingModule,
      HttpClientModule,
  ],
  declarations: [
      AppComponent,
      AdminLayoutComponent,
      LoginComponent,
      DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
