import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { QuoteService } from '../../services/quoteService';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
  providers: [ QuoteService ]
})
export class CreatePage {

  quote = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public quoteService: QuoteService) {
  }

  addQuote() {
    this.quoteService.addQuote(this.quote)
      .map(res => res.json())
      .subscribe(() => this.navCtrl.pop());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

}
