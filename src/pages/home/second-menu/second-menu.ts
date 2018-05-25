import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-second-menu',
  templateUrl: 'second-menu.html'
})
export class SecondMenu {
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
