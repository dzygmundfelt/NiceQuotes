import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { QuoteService } from '../../services/quoteService';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
  providers: [ QuoteService ]
})
export class QuotePage {

  quote = { author: String,
            words: String };


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public quoteService: QuoteService) {
    quoteService.getQuote(this.navParams.get('quoteId')).subscribe(data => {
      console.log(data);
      this.quote.author = data.author;
      this.quote.words = data.words;
    });
  }

  deleteQuote() {
    this.quoteService.deleteQuote(this.navParams.get('quoteId')).subscribe(
      () => this.navCtrl.pop()
    );
  }

  saveQuote() {
    this.quoteService.updateQuote(this.navParams.get('quoteId'), this.quote)
      .subscribe(
        () => this.navCtrl.pop()
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage ' + this.navParams.get('quoteId'));
  }

}
