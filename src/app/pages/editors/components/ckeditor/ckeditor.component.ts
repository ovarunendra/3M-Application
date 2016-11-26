import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import { RestService } from  './rest.service';
//import './ckeditor.loader.ts';

@Component({
  selector: 'ckeditor-component', 
  encapsulation: ViewEncapsulation.None,
  template: require('./ckeditor.html'),
  styles: [require('./ckeditor.scss')]
})

export class Ckeditor{
 public items:any;
 constructor(private restService: RestService) {
   this.restService.checkCredentials().subscribe(data => {
        this.items = data;
      }, error => console.log('Could not load todoList'));
 } 
}
