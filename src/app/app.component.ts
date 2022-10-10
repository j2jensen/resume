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
  profile = {
    technologyGroups: [
      {
        title: ".NET",
        technologies: [
          { name: "ASP.NET Core" },
          { name: "Web API" },
          { name: ".NET 6" },
          { name: "C# 10" },
        ]
      },
      {
        title: "Web Client",
        technologies: [
          { name: "Angular" },
          { name: "TypeScript" },
          { name: "JavaScript" },
          { name: "SASS" },
          { name: "LESS" },
          { name: "CSS" },
          { name: "HTML" },
          { name: "JQuery" },
        ]
      },
      {
        title: "Unit Testing",
        technologies: [
          { name: "NUnit" },
          { name: "XUnit" },
          { name: "MSTest" },
          { name: "Moq" },
          { name: "Jasmine" },
          { name: "AutoFixture" },
          { name: "Specflow" },
        ]
      },
      {
        title: "Dev Ops",
        technologies: [
          { name: "Azure DevOps" },
          { name: "Application Insights" },
          { name: "Microsoft Azure" },
          { name: "Github Workflows" },
        ]
      },
      {
        title: "Databases",
        technologies: [
          { name: "SQL Server" },
          { name: "Snowflake" },
          { name: "Spark/Databricks" },
          { name: "RavenDB" },
        ]
      }, {
        title: "Object-Relational Mappers",
        technologies: [
          { name: "Entity Framework" },
          { name: "Dapper" },
        ]
      }, {
        title: "Miscellaneous",
        technologies: [
          { name: "Java" },
          { name: "Python" },
        ]
      },
    ]
  }


  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.isPrintable = params["print"] !== undefined;
      })
  }
}
