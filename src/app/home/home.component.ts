import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    {value: 'science', viewValue: 'business'}]


  public newsSearchForm: FormGroup;
  private API_KEY = "d7ba3d2c4d6840538017893777ed724c";
  showResultsDiv: boolean = false;
  private API_ENDPOINT ;
  data = [];

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) { }

  makeTheRequestAndGetData(formValue){
   return this.httpClient.get(`https://newsapi.org/v2/top-headlines?category=${formValue.category}&
   language=en&country=us&sortBy=publishedAt&apiKey=${this.API_KEY}`).pipe(delay(3000)).subscribe((data) => {
      console.log(data['articles']);
      this.data = data['articles'];
    });
   
  }

  searchButtonClicked(){
    this.showResultsDiv = true;
  }

  ngOnInit() {
    this.newsSearchForm = this.formBuilder.group({
      category:['']
    })
  }

}
