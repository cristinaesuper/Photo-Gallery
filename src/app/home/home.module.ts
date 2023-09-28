import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import { HomeScreenComponent } from './containers';
import {HeaderComponent} from "../shared/components/header/header.component";
import {MenuComponent} from "../shared/components/menu/menu.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FrontPageComponent } from './components/front-page/front-page.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';

@NgModule({
  declarations: [
    HomeScreenComponent,
    FrontPageComponent,
    CollectionComponent,
    CollectionCardComponent
  ],
  exports: [
    HomeScreenComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    NgOptimizedImage,
    RouterOutlet,
    HttpClientModule,
    MatIconModule,
    MenuComponent,
    BrowserAnimationsModule
  ]
})
export class HomeModule { }