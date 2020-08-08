import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrls: ['./com2.component.css']
})
export class Com2Component{
  title = 'Com2 Title';

  constructor(private titleService:Title){
  }
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}