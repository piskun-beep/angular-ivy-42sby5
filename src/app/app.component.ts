import { Component, VERSION } from '@angular/core';
import { TitleService } from './services/title.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    public name: string;
    
    constructor(private titleService: TitleService){}
}
