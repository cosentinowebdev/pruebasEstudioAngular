import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs!: Subscription;

  constructor(){

    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log(valor),
    //   error => console.warn('error: ',error),
    //   ()=>console.info("finalizo")
    // );
    this.intervalSubs = this.retornaIntevalo()
    .subscribe(

      (valor) => console.log(valor)

    )
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.intervalSubs?.unsubscribe();
  }
  retornaIntevalo():Observable<any>{
    return interval(1000)
    .pipe(
      // take(10),
      map( valor=> valor+1),
      filter( valor => (valor % 2 == 0)),
    );
    
  }
  retornaObservable():Observable<number>{
    let i=-1;
    return new Observable<number>(
      
      observer => {

        const intervalo = setInterval( () => {
          i++;
          observer.next(i);

          if ( i === 4){
            clearInterval( intervalo );
            observer.complete();
          }
          if(i === 2){
            // i=0;
            observer.error("llego al 3")
          }

        },1000);

      }

    );
  }

}
