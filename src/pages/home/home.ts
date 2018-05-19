import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vars: any = [];
  variable: any;
  constructor(public navCtrl: NavController) {

  }
  push(element) {
    this.vars.push(element);
    console.log(this.vars)
    this.variable = '';
  }

}
