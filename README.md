# Resume App

A web app resume to replace the word doc I've been using most of my career.

See the live product at https://j2jensen.github.io/resume/

HTML and CSS give me more freedom in formatting and styles, and as a web app it's easy for people to see right from the Internet. Plus, it gives me a chance to practice programming and setting up continuous deployment.

## Development

The scaffolding was generated with [Angular CLI](https://github.com/angular/angular-cli).

Some of my baseline styles and components come from the [Cashmere library](https://cashmere.healthcatalyst.net/web/components).

Feel free to clone the repo and poke around. `ng serve --open` will build the app and open it in a live web browser session, where the application will automatically reload if you change any of the source files.

## CI/CD

I'm using github workflows to automatically build and deploy the app whenever a change is made to the `main` branch.

## Project Status

For this small project, I have prioritized simplicity and pragmatism. The code isn't perfectly DRY. I haven't separated code out into components. I haven't separated the data into a separate YAML file. I haven't created separate styles for printing. Even though I'm using Angular, there's nothing interactive about this app. And I haven't written unit tests. Try not to be too judgy. 😉
