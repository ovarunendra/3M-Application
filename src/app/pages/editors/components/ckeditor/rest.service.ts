import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

export class RestService {

  constructor(
     private http:Http){}
  

 checkCredentials() {
   this.http.get('data/users.json')
                
 }

  
}