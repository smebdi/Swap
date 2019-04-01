# [Djangular Front](https://djangular-front-end.appspot.com/)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.

# Getting started
[todo](https://medium.com/@jh3y/how-to-update-all-npm-packages-in-your-project-at-once-17a8981860ea): wipe dependencies  
_In the app_
- `npm install`
- `npm start`  

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Specify ng serve --port #### to use the non default port number.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Deploying to Google Cloud
[Build Process](https://medium.com/@asanoop24/deploying-angular-6-app-on-google-app-engine-b6259d4c16c2) is a little different.  

_In the root of the app_
- `npm run buildprod`  

_In Google cloud_
- Navigate to [Google Storage Bucket](https://console.cloud.google.com/storage/browser) 
- Then into [djangular-bucket](https://console.cloud.google.com/storage/browser/djangular-bucket?project=djangular-front-end&folder&organizationId)
- Delete current build folder, replace with newly created build folder (_if app.yaml has been updated, replace it_)
- Open project cloud shell
- gsutil rsync -r gs://djangular-bucket ./angular-app-gcp  

_Back in the app_
- `gcloud app deploy`

## The Back End
This application interfaces with a python project, coloquially named DjangularAPI.  
It references a number of custom build API endpoints. You can see an example of that [here](https://djangular-back-end.appspot.com/api/beer/)  
These endpoints are accessed through services associated with each component  
The _not-necessarily-comprehensive_ list is available [here](https://djangular-back-end.appspot.com/api/list)

## The Other Back End
User profiles, preferences, comments, interactions, _etc_ will be managed through a node back end.  
This back end has not yet been designed.