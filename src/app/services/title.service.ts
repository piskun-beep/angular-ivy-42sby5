 // Shows the title for each page based on data  from the router

import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import {BehaviorSubject, Observable, from} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TitleService{

  myTitle : string

  constructor(private router: Router,
      private activatedRoute: ActivatedRoute,
      private titleService: Title) {
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route: any) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route: any) => route.data)).subscribe((event) => {
          this.titleService.setTitle(event['title']);
          console.log('Page Title', event['title']);
          this.myTitle = event['title']
        });
    }

  displayName(): string {
   return this.myTitle;
  }

  ngOnInit(){
    console.log('test')
  }

}
