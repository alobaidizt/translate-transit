import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-landmarks',
  templateUrl: 'landmarks.html'
})
export class LandmarksPage {

  constructor(public navCtrl: NavController) {

  }

  switchTabs(){
    this.navCtrl.parent.select()
  }
}