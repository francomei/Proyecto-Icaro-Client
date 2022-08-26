import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


export interface PeriodicElement {
  Remitente: string;
  Destinatario: string;
  Fecha: number;
  Mensaje: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Remitente: "Joaquin Mainardi", Destinatario: 'Ramiro Roman', Fecha:14_05_20017, Mensaje: ''},
  {Remitente: "Joaquin Mainardi", Destinatario: 'Tomas Pozzetti', Fecha: 4.0026, Mensaje: ''},
  {Remitente: "Joaquin Mainardi ", Destinatario: 'Turbo Bacon', Fecha: 6.941, Mensaje: ''},
  {Remitente: "Joaquin Mainardi", Destinatario: 'Mateo Colombiano', Fecha: 9.0122, Mensaje: ''},
];

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})


export class PrincipalComponent implements OnInit {
  receiverId!: string
  text!: string



  displayedColumns: string[] = ['Remitente', 'Destinatario', 'Fecha', 'Mensaje'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;
  router: any;

  getSentMessages() { 
    
  }

  getReceivedMessages() {

  }

  nuevoMensaje() { 
    window.open("http://localhost:4200/messages")
  }


  constructor( private fb:FormBuilder) {}

   datos:FormGroup=this.fb.group({
    'text': ['',[Validators.maxLength(144)]],
    },
  )

  salir(){
    window.open("http://localhost:4200/")
    }

  ngOnInit(): void {
  }
}
