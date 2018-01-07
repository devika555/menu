import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatProgressBarModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent } from './footer/footer.component';
import {DishdetailComponent } from './dishdetail/dishdetail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {DishService} from './services/dish.service';
import {PromotionService} from './services/promotion.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatToolbarModule,MatListModule,MatGridListModule,MatButtonModule,
     BrowserAnimationsModule,MatCardModule,
    FlexLayoutModule,AppRoutingModule
  ],
  providers: [DishService,PromotionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
