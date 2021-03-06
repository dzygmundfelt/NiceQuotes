import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from './homeService'

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

}
