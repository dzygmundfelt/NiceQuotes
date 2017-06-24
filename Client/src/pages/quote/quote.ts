import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { QuoteService } from './quoteService';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
  providers: [QuoteService]
})
export class QuotePage {

  author: string;
  words: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public quoteService: QuoteService) {
    quoteService.getQuote(this.navParams.get('quoteId')).subscribe(data => {
      console.log(data);
      this.author = data.author;
      this.words = data.words;
    });
  }

  deleteQuote() {
    this.quoteService.deleteQuote(this.navParams.get('quoteId'));
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage ' + this.navParams.get('quoteId'));
  }

}
