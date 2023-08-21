import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  constructor(){
    const obs$ = new Observable(

      observer => {

        let i=-1;

        const intervalo = setInterval( () => {
          i++;
          observer.next(i);

          if ( i === 4){
            clearInterval( intervalo );
            observer.complete();
          }
          if(i==3){
            observer.error("llego al 3")
          }

        },1000);

      }

    );
    obs$.subscribe(
      valor => console.log(valor),
      error => console.warn('error: ',error),
      ()=>console.info("finalizo")
    )

  }

}
