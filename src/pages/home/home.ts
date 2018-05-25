import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondMenu } from './second-menu/second-menu';
import { CleaningComponent } from './cleaning/cleaning';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

// import { Firebase } from '@ionic-native/firebase';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list: AngularFireList<any>;
  tasks: any;
  tasksRef: AngularFireList<{}>;
  vars: any = [];
  variable: any;

  rootPage: any = SecondMenu;
  pages: Array<{ title: string, component: any }>;
  constructor(public navCtrl: NavController,
    public database: AngularFireDatabase,
    
    // private http: HttpClient
  ) {
    this.pages = [ {
      title: 'Limpieza',
      component: CleaningComponent
    },
    {
      title: 'Cocina',
      component: SecondMenu
    },
    {
      title: 'Series',
      component: SecondMenu
    },
    
    {
      title: 'Cine',
      component: SecondMenu
    },
    {
      title: 'Música',
      component: SecondMenu
    },
    {
      title: 'Eventos',
      component: SecondMenu
    },
  ];
  this.list = this.database.list('users');
  // this.tasksRef = this.database.list('users');
  //   this.tasks = this.tasksRef.snapshotChanges()
  //   .map(changes => {
  //     console.log(changes);
  //     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  //   });
  
  // this.http.get('https://piso-ocio.firebaseio.com/').subscribe(res => console.log(res));
//   this.firebase.getToken()
//   .then(token => console.log(`The token is ${token}`)); // save the token server-side and use it to push notifications to this device
//   // .catch(error => console.error('Error getting token', error));

// this.firebase.onTokenRefresh()
//   .subscribe((token: string) => console.log(`Got a new token ${token}`));

  }
  push(element) {
    this.vars.push(element);
    console.log(this.vars)
    this.variable = '';
  }
  openPage(event){
    console.log(event);
    this.navCtrl.push(event.component, {
      item: 'id'
    });
  }
}
