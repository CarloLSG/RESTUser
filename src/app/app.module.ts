import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";
import { FooterContentComponent } from './users/components/footer-content/footer-content.component';
import {MatIconModule} from "@angular/material/icon";
import { ToolbarContentComponent } from './users/components/toolbar-content/toolbar-content.component';
import { UserCardComponent } from './users/components/user-card/user-card.component';
import { MainContentComponent } from './users/components/main-content/main-content.component';
import {UserApiService} from "./users/services/user-api.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    ToolbarContentComponent,
    UserCardComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatCardModule,
    MatToolbarModule,
    NgOptimizedImage,
    MatIconModule
  ],
  providers: [UserApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
