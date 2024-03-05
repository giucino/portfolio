/*
* ----------------------------------------------------------------------------------------
Author       : Giuseppe Cino
Template Name: Resume Portfolio
Version      : 1.0
* ----------------------------------------------------------------------------------------
*/
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
