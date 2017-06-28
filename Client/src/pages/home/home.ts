import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QuotePage } from '../quote/quote';
import { CreatePage } from '../create/create';

import { QuoteService } from '../../services/quoteService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [QuoteService]
})
export class HomePage {

  quotes: any;
  createPage = CreatePage;

  constructor(public navCtrl: NavController, public quoteService:QuoteService) {
  }

  goToQuote(id:Number) {
    this.navCtrl.push(QuotePage, {quoteId: id});
    console.log(id + " pushed");
  }

  ionViewWillEnter() {
    this.quoteService.getAllQuotes().subscribe(data => {
          this.quotes = data;
          console.log(data);
        });
  }

}
