import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'compN3';
  //atributos de ARTICULO
  id: number = 0;
  descripcion: string = '';
  precio: number = 0;
  //array de articulos
  arrArticulos: any = [
    { id: 1, descripcion: 'patatas', precio: 10.55 },
    { id: 2, descripcion: 'manzanas', precio: 12.1 },
    { id: 3, descripcion: 'cebollas', precio: 9 },
  ];
  //variables
  artSelecionado: any = [];
  artNuevo: any = [];
  pos: number=0;
  anadido:boolean = false;
  
  constructor() {}

  //eliminar articulo
  borrar(item: any) {
    let pos = 0;
    for (let i = 0; i < this.arrArticulos.length; i++) {
      if (this.arrArticulos[i] == item) {
        pos = i;
      }
    }
    this.arrArticulos.splice(pos, 1);
  }
  //articulo seleccionado
  select(item: any) {
    this.pos=item.id;
    this.artSelecionado = [];
    this.artSelecionado.push({
      id: item.id,
      descripcion: item.descripcion,
      precio: item.precio,
    });    
  }
  //añade un articulo nuevo, si el ID no esta repetido
  agregarArt($event: any) {  
    for (let i = 0; i < this.arrArticulos.length; i++) {
      if (this.arrArticulos[i].id == $event.id) {
        this.anadido = true;        
      }
    }    
    if (!this.anadido) {
      this.arrArticulos.push($event);
    }else{
      this.anadido = false;
    }
  }
  //modifica articulo seleccionado
  modificarArt($event: any){
    for (let i = 0; i < this.arrArticulos.length; i++) {
      if (this.arrArticulos[i].id == this.pos) {
            this.arrArticulos[i]=$event;            
      }
    }  
  }
}
