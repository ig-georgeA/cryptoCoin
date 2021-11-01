import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxGridModule, IgxActionStripModule, IgxInputGroupModule, IgxListModule, IgxComboModule, IgxSelectModule, IgxNavbarModule, IgxToggleModule, IgxNavigationDrawerModule, IgxDialogModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { CardViewALTComponent } from './card-view-alt/card-view-alt.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    MasterViewComponent,
    CardViewComponent,
    CardViewALTComponent,
    GridViewComponent,
    ListViewComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxIconModule,
    FormsModule,
    IgxGridModule,
    IgxActionStripModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxComboModule,
    IgxSelectModule,
    IgxNavbarModule,
    IgxToggleModule,
    IgxNavigationDrawerModule,
    IgxDialogModule
  ]
})
export class MasterViewModule {
}
