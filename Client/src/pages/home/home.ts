import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from './homeService';
import { QuotePage } from '../quote/quote';
import { CreatePage } from '../create/create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {

  quotes: any;
  createPage = CreatePage;

  constructor(public navCtrl: NavController, public homeService:HomeService) {
  }

  goToQuote(id:Number) {
    this.navCtrl.push(QuotePage, {quoteId: id});
    console.log(id + " pushed");
  }

  ionViewWillEnter() {
    this.homeService.getAllQuotes().subscribe(data => {
          this.quotes = data;
          console.log(data);
        });
  }

}
