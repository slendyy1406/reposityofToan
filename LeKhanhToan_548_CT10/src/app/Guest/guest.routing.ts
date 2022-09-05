import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { AboutComponent } from "./Pages/about/about.component";
import { BlogComponent } from "./Pages/blog/blog.component";
import { ContactComponent } from "./Pages/contact/contact.component";
import { DetailComponent } from "./Pages/detail/detail.component";
import { HomePageComponent } from "./Pages/home-page/home-page.component";
const routes: Routes = [
    {
        path:"guest",
        component:LayoutComponent,
        children:[
            {
                path:"",
                redirectTo:"home-page",
                pathMatch:"full",
            },
            {
                path:"about",
                component:AboutComponent 
             },
             {
                path:"home-page",
                component:HomePageComponent
             },
             {
                path:"detail/:id",
                component:DetailComponent
             },
             {
                path:"blog",
                component:BlogComponent
             },
             {
                path:"contact",
                component:ContactComponent
             }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class GuestRoutingModule { }