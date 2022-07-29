import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume-app';
  profile = {
    technologyGroups: [
      {
        title: ".NET Framework and .NET 6",
        technologies: [
          { name: "ASP.NET Core" },
          { name: "Web API" },
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
          { name: "Jasmine" },
          { name: "Specflow" },
        ]
      },
    ]
  }
}
