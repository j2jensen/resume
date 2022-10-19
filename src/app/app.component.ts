import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'resume-app';
  isPrintable = true;
  mode: ('detailed' | 'one-page') = "one-page";


  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.isPrintable = params["print"] !== undefined;
      })
  }
}
