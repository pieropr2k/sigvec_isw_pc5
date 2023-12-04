import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientService } from './services/client.service';
import { Client } from './model/client';

@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sigvec_frontend';
  clientsArray: Client[] = [];
  page: number;
  clientForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private personaService: ClientService
  ) {
    this.page = 1;
    this.clientForm = this.formbuilder.group({
      id_client: [''],
      last_names: [''],
      first_names: [''],
      birthdate: [null],
      email: [''],
      document_id_type: [''],
      document_id_number: [null],
      n_phone: [null],
      district: [''],
      direction: [''],
    });
  }

  ngOnInit(): void {
    this.getClients();
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
  addClient(): void {
    this.personaService.create(this.clientForm.value).subscribe(
      (result: any) => {},
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia...',
          text: '!Ah ocurrido un error al registrar persona!',
        });
      }
    );
    Swal.close();
    Swal.fire({
      icon: 'success',
      title: '¡Registro Exitoso! - registrarPersona',
      text: '!Se registro exitosamente los datos de la persona!',
    });
    this.clientForm.reset();
  }

  deleteClient(persona: Client): void {
    console.log('Result', persona);
    this.personaService.delete(persona).subscribe(
      (result: any) => {},
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia...',
          text: '!Ah ocurrido un error al eliminar persona!',
        });
      }
    );
    Swal.close();
    Swal.fire({
      icon: 'success',
      title: '¡Eliminacion Exitosa! - eliminarPersona',
      text: '!Se elimino exitosamente los datos de la persona!',
    });
  }

  updateClient(client: Client): void {
    const {id_client, last_names, first_names, birthdate, document_id_type, document_id_number, n_phone, district, direction} = client;
    console.log('Result', client);
    this.clientForm.setValue({
      client
    });
  }
}
