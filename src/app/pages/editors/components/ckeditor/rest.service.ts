import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RestService {

  constructor(
     private http:Http){}
  

 checkCredentials() {
   return this.http.get('data/users.json')
                    .map(response => response.json());
                
 }

  
}