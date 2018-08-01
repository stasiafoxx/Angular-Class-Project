import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  constructor() { }
  myFunction () {
    console.log('Hello World');
  }
}
