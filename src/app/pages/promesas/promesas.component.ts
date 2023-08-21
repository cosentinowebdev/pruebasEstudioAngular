import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
    const promesa = new Promise(
      ( resolve, reject )=>{
        // console.log("hola mundo");
        if (false) {
          resolve("hola mundo");
        } else {
          reject("fallo");
        }
      }      
    );
    promesa.then(
      ( mensaje )=>{
        console.log(mensaje);
      }
    ).catch(
      error => console.error('error en la promesa, ', error)
    );
    console.log("fin del init");
  }
}
