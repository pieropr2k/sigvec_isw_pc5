import { Component } from '@angular/core';
import { Client } from '../../model/client';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrl: './update-client.component.css'
})
export class UpdateClientComponent {
  clientForm: FormGroup;
  client_id: String | null | undefined;

  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private formbuilder: FormBuilder,
    private personaService: ClientService
  ) {
    this.clientForm = this.formbuilder.group({
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
    this.client_id = this._route.snapshot.paramMap.get('id');
  }

  updateClient(): void {
    //console.log(this.client_id);
    //console.log({id_client: Number(this.client_id),...this.clientForm.value});
    this.personaService.update(
      {id_client: Number(this.client_id),...this.clientForm.value}
      ).subscribe(
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
      title: '¡Registro Exitoso! - updateClient',
      text: '!Se actualizaron exitosamente los datos del cliente!',
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
