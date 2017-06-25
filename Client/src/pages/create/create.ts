import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { CreateService } from './createService';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
  providers: [ CreateService ]
})
export class CreatePage {

  quote = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public createService: CreateService) {
  }

  addQuote() {
    this.createService.addQuote(this.quote)
      .map(res => res.json())
      .subscribe(() => this.navCtrl.pop());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

}
