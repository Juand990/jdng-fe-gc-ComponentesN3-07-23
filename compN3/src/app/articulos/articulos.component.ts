import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent {

  //articulo seleccionado que viene del app.component
  @Input() data:any=[];
  //envio del articulo agregar (plus) y modificado (mod) al app.component
  @Output() plus = new EventEmitter<any>();
  @Output() mod = new EventEmitter<any>();

  constructor() {}
  //evento para agregar
  agregar() {    
    if (this.data[0]==undefined) {
      this.plus.emit(this.data);
      this.data=[];
    } else {
      this.plus.emit(this.data[0]);
      this.data=[];
    }      
  }
  //evento para modificar
  modificar(){    
    if (this.data[0]==undefined) {
      this.mod.emit(this.data);      
      this.data=[];
    } else {
      this.mod.emit(this.data[0]);      
      this.data=[];
    }
  }
}
