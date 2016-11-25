import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import { RestService } from  './Ckeditor/rest.service';
import './ckeditor.loader.ts';

@Component({
  selector: 'ckeditor-component',
   providers: [RestService],
  
  template: require('./ckeditor.html'),
  styles: [require('./ckeditor.scss')]
})

export class Ckeditor implements OnInit {
 
 constructor(
        // private _service:RestService){}
        private restService: RestService) {}

 ngOnInit(){
        this.restService.checkCredentials();
    }
}
