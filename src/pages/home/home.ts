import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondMenu } from './second-menu/second-menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vars: any = [];
  variable: any;

  rootPage: any = SecondMenu;
  pages: Array<{ title: string, component: any }>;
  constructor(public navCtrl: NavController) {
    this.pages = [ {
      title: 'marina',
      component: SecondMenu
    },
    {
      title: 'sara',
      component: SecondMenu
    }]
  }
  push(element) {
    this.vars.push(element);
    console.log(this.vars)
    this.variable = '';
  }
  openPage(event){
    console.log(event);
    this.navCtrl.push(SecondMenu, {
      item: 'id'
    });
  }
}
