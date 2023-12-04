import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige la ruta vacía a '/home'
  { path: 'home', component: ClientsListComponent },
  { path: 'register_client', component: RegisterClientComponent },
  { path: 'update_client/:id', component: UpdateClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
