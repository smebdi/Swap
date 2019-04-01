# Djangular Front

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Specify ng serve --port #### to use the non default port number.
To connect to the associated Django API, you will need to do so through a service.
Leveraging the content created for the comment service/component/model is enough to get started with something.

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
  
---

## Deploying to Google Cloud
[Build Process](https://medium.com/@asanoop24/deploying-angular-6-app-on-google-app-engine-b6259d4c16c2) is a little different.  

_In your app_
- `npm run buildprod`  

_In Google cloud_
- Navigate to [Google Storage Bucket](https://console.cloud.google.com/storage/browser) 
- Then into [djangular-bucket](https://console.cloud.google.com/storage/browser/djangular-bucket?project=djangular-front-end&folder&organizationId)
- Delete current build folder, replace with newly created build folder (_if app.yaml has been updated, replace it_)
- Open project cloud shell
- gsutil rsync -r gs://djangular-bucket ./angular-app-gcp  

_Back in your app_
- `gcloud app deploy`