import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css'
})
export class ClientsListComponent {
  clientsArray: Client[] = [];
  page: number;

  constructor(
    //private _route: ActivatedRoute,
    private router: Router,
    private personaService: ClientService
  ) {
    this.page = 1;
  }

  ngOnInit(): void {
    this.getClients();
  }

  addClient(): void {
    this.router.navigate(["register_client"]);
  }

  getClients(): void {
    this.personaService.getAll().subscribe(
      (result: any) => {
        console.log('Result', result);
        this.clientsArray = result;
      },
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia...',
          text: '!Ah ocurrido un error!',
        });
      }
    );
  }

  updateClient(id: any) {
    // Esto es reciente
    Swal.fire({
      title: 'Esta seguro de editar los datos del cliente seleccionado?',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Si',
      focusCancel: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/update_client', id.toString()]);
      } //end if
    }); //end swal.fire
  }

  oneClient(id: any) {
    this.router.navigate(['/client_info', id.toString()]);
  }

  deleteClient(persona: any): void {
    console.log('Result', persona);
    Swal.fire({
      title: 'Esta seguro de Eliminar la persona seleccionada?',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Si',
      focusCancel: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.personaService.delete(persona).subscribe(
          (result: any) => {
            this.getClients();
          },
          (err: any) => {
            Swal.close();
            Swal.fire({
              icon: 'error',
              title: 'Advertencia...',
              text: '!Ah ocurrido un error al eliminar persona!',
            });
          }
        ); //end subscribe
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: '¡Eliminacion Exitosa! - eliminarPersona',
          text: '!Se elimino exitosamente los datos de la persona!',
        });
      } //end if
    });
  }
  
}
