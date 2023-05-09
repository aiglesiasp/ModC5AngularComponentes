import { Component } from '@angular/core';
import { Cliente } from './models/Cliente';
import { Formulario } from './models/Formulario';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentAngular';
  nombre: string = "";
  cif: string = "";
  direccion: string = "";
  grupo: string = "";
  listaClientes: Cliente[] = [];
  fnombre: string = "";
  femail: string = "";
  fmensaje: string = "";
  frespuesta: string = "";
  listaFormulario: Formulario[] = [];


  constructor(){}

  guardarCliente(): void {
    const cliente: Cliente = {
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo : this.grupo
    }
    this.listaClientes.push(cliente);
    this.nombre = "";
    this.cif = "";
    this.direccion = "";
    this.grupo = "";
  }

  enviarFormulario(): void {
    const formulario: Formulario = {
      nombre: this.fnombre,
      email: this.femail,
      mensaje: this.fmensaje,
      respuesta : this.frespuesta
    }
    this.listaFormulario.push(formulario);
    this.fnombre = "";
    this.femail = "";
    this.fmensaje = "";
    this.frespuesta = "";
  }

}
