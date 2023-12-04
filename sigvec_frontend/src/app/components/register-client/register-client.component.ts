import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrl: './register-client.component.css'
})
export class RegisterClientComponent {
  title = 'register_client'
  clientForm: FormGroup;
  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private personaService: ClientService
  ) {
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
  addClient(): void {
    this.personaService.create(this.clientForm.value).subscribe(
      (result: any) => {},
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia...',
          text: '!Ah ocurrido un error al registrar el cliente!',
        });
      }
    );
    Swal.close();
    Swal.fire({
      icon: 'success',
      title: '¡Registro Exitoso! - registrarCliente',
      text: '!Se registro exitosamente los datos del cliente!',
    });
    this.clientForm.reset();
    this.personaService.getAll();
    this.router.navigate(['']);
  }

  cancelOperation(): void {
    Swal.fire({
      title: 'Desea Cancelar la operacion?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientForm.reset();
        this.router.navigate(['']);
      }
    });
  }
}


