import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

export interface Category{
  value: String;
  viewValue: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[]=[
    {value: 'science', viewValue: 'science'},
    {value: 'entertainment', viewValue: 'entertainment'},
    {value: 'general', viewValue: 'general'},
    {value: 'health', viewValue: 'health'},
    {value: 'business', viewValue: 'business'},
    {value: 'sports', viewValue: 'sports'},
    {value: 'technology', viewValue: 'technology'}
    ]

  private API_KEY = "d7ba3d2c4d6840538017893777ed724c";
  showResultsDiv: boolean = false;
  private API_ENDPOINT ;
  data = [];

  constructor(private httpClient: HttpClient) { }

  makeTheRequestAndGetData(formValue){
   return this.httpClient.get(`https://newsapi.org/v2/top-headlines?category=${formValue}&
   language=en&country=us&sortBy=publishedAt&apiKey=${this.API_KEY}`).pipe(delay(3000)).subscribe((data) => {
      console.log(data['articles']);
      this.data = data['articles'];
      this.showResultsDiv= false;
    });
   
  }

  searchButtonClicked(formValue){
    this.showResultsDiv = true;
    this.makeTheRequestAndGetData(formValue);
  }

  ngOnInit() {
   
  }

}
