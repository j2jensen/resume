import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'resume-app';
  isPrintable = true;
  mode: ('detailed' | 'one-page') = "detailed";
  yearsOfExperience: string = "";

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.yearsOfExperience = this.getApproximateYearsBetween(new Date(2007, 10, 1), new Date()) + "+";

    this.route.queryParams
      .subscribe(params => {
        this.isPrintable = params["print"] !== undefined;
        this.mode = params["mode"] === "one-page" ? "one-page" : "detailed";
      })
  }

  setMode(newMode: ('detailed' | 'one-page')) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { mode: newMode },
      queryParamsHandling: "merge"
    });
  }

  getApproximateYearsBetween(start: Date, end: Date) {
    const yearsBetweenYears = end.getFullYear() - start.getFullYear();
    return yearsBetweenYears + (start.getMonth() < end.getMonth() ? 0 : -1);
  }
}
