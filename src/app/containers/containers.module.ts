import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersRoutingModule } from './containers-routing.module';
import { ContainersComponent } from './containers.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [ContainersComponent, HeaderComponent, BreadcrumbComponent, BannerComponent],
  imports: [
    SharedModule,
    ContainersRoutingModule
  ]
})
export class ContainersModule { }
