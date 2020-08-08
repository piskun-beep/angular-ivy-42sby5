import { Component, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    public name: string;
    title = 'title service';
    
    constructor(private titleService:Title) {
    }
 
    ngOnInit() {
      this.titleService.setTitle(this.title);
    }
}
