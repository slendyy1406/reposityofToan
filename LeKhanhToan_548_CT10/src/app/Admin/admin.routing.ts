import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminlayoutComponent } from "./adminlayout/adminlayout.component";
import { QlydonhangComponent } from "./Pages/qlydonhang/qlydonhang.component";
import { QlysanphamComponent } from "./Pages/qlysanpham/qlysanpham.component";
import { SuaSpComponent } from "./Pages/sua-sp/sua-sp.component";
import { ThemSPComponent } from "./Pages/them-sp/them-sp.component";


const routes: Routes = [
    {
        path:"admin",
        component:AdminlayoutComponent,
        children:[
            {
                path:"",
                redirectTo:"sanpham",
                pathMatch:"full",
            },
            {
                path:"sanpham",
                component: QlysanphamComponent
             },
             {
                path:"donhang",
                component: QlydonhangComponent
             },
             {
                path:"themsp",
                component: ThemSPComponent
             },
             {
                path:"suasp/:id",
                component: SuaSpComponent
             }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }