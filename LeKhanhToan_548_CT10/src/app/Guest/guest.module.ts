import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutComponent } from './Pages/about/about.component';
import { GuestRoutingModule } from './guest.routing';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LayoutComponent } from './layout/layout.component';
import { SortPipe } from '../shared/pipe/sort.pipe';
import { CartComponent } from './layout/cart/cart.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { LoginComponent } from './layout/login/login.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { ContactComponent } from './Pages/contact/contact.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutComponent,
    LayoutComponent,
    SortPipe,
    CartComponent,
    DetailComponent,
    LoginComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    CarouselModule
  ]
})
export class GuestModule { }
