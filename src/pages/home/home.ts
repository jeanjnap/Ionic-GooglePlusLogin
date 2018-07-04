import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFirestore } from 'angularfire2/firestore';
import firebase from 'firebase'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private googlePlus: GooglePlus
  ) {

  }

  Login() {
    this.googlePlus.login({ 'webClientId': '808832611356-9t7qrochbt1r0r3k69fgsioufd013go2.apps.googleusercontent.com', 'offline': true }).then((obj) => {
      alert(JSON.stringify(obj));
      console.log(obj);
    }).catch((msg) => {
      alert(JSON.stringify(msg));
      console.log(msg);
    });
  }

}
