import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.css'],
})
export class Com1Component {
  title = 'One Component Title';
 
  constructor(private titleService:Title){
  }
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}