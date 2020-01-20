import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private API_KEY = "d7ba3d2c4d6840538017893777ed724c";
  private API_ENDPOINT = `https://newsapi.org/v2/top-headlines?q=business&sortBy=publishedAt&apiKey=${this.API_KEY}`;
  //`https://newsapi.org/v2/top-headlines?language=en&country=us&apiKey=${this.API_KEY}`;
  data = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.API_ENDPOINT).subscribe((data) => {
      console.log(data['articles']);
      this.data = data['articles'];
    });
  }

}
