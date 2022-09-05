import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { QlysanphamComponent } from './Pages/qlysanpham/qlysanpham.component';
import { QlydonhangComponent } from './Pages/qlydonhang/qlydonhang.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin.routing';
import { ThemSPComponent } from './Pages/them-sp/them-sp.component';
import { FormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlayout/adminlogin/adminlogin.component';
import { SuaSpComponent } from './Pages/sua-sp/sua-sp.component';




@NgModule({
  declarations: [
    AdminlayoutComponent,
    QlysanphamComponent,
    QlydonhangComponent,
    ThemSPComponent,
    AdminloginComponent,
    SuaSpComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModule { }
