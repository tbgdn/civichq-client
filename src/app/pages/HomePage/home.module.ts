import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './components/home/home.component';

import { HomeRouting } from './config/home.routing';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesNavComponent } from './components/categories-nav/categories-nav.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryComponent } from './components/category/category.component';

import { CarouselModule } from 'ng2-bootstrap/components/carousel';
import { CategoriesService } from './../../services/category.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    CarouselModule,
    SharedModule,
    HomeRouting,
    HttpModule,
  ],
  declarations: [
    HomeComponent,
    BannerComponent,
    CategoriesNavComponent,
    CategoriesListComponent,
    CategoryComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    CategoriesService,
    { provide: 'Window',  useValue: window }
  ]
})
export class HomeModule { }
