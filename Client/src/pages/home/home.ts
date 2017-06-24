import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from './homeService';
import { QuotePage } from '../quote/quote'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {

  quotes: any;

  constructor(public navCtrl: NavController, public homeService:HomeService) {
    homeService.getAllQuotes().subscribe(data => {
      this.quotes = data;
      console.log(data);
    })
  }

  goToQuote(id:Number) {
    this.navCtrl.push(QuotePage, {quoteId: id});
    console.log(id + " pushed");
  }

}
