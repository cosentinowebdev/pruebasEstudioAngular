import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo!: string;
  public tituloSub$: Subscription;
  constructor(private router: Router, private route : ActivatedRoute){
    // console.log({ActivatedRoute: this.route.snapshot.children[0].data});
    this.tituloSub$ = this.getArgumentosRuta()
    .subscribe(data => {
      console.log({promesa:data});
      this.titulo = data['titulo'];
      document.title = data['titulo'];
    });
  }
  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }
  getArgumentosRuta() {
    return this.router.events
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
      map((event:ActivationEnd) => event.snapshot.data)
    );
  }

}
