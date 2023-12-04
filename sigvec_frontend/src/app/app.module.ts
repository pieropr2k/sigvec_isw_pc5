import { ClientService } from './services/client.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarWidgetComponent } from './components/navbar-widget/navbar-widget.component';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';

@NgModule({
    declarations: [AppComponent, RegisterClientComponent, ClientsListComponent,UpdateClientComponent, NavbarWidgetComponent],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      NgxPaginationModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    exports: [
      NgxPaginationModule
    ],
    providers: [ClientService],
    bootstrap: [AppComponent],
  })
export class AppModule {}
