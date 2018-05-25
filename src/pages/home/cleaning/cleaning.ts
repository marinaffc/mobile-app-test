import { Component } from '@angular/core';

/**
 * Generated class for the CleaningComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-cleaning',
  templateUrl: 'cleaning.html'
})
export class CleaningComponent {

  text: string;

  constructor() {
    console.log('Hello CleaningComponent Component');
    this.text = 'Hello World';
  }

}
