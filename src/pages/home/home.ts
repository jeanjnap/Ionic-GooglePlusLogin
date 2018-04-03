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
    this.googlePlus.login({ 'webClientId': '771015087278-q9qbe38j8u5ad2rmuj2po1u9uvocg0d7.apps.googleusercontent.com', 'offline': true }).then((obj) => {
      alert(obj);
    }).catch((msg) => {
      alert(msg)
    });
  }

}
