import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CardViewALTComponent } from './card-view-alt/card-view-alt.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [{ path: '', component: MasterViewComponent, children: [{ path: '', redirectTo: 'card-view', pathMatch: 'full' }, { path: 'card-view', component: CardViewComponent, data: { text: 'Card View' } }, { path: 'card-view-alt', component: CardViewALTComponent, data: { text: 'Card View ALT' } }, { path: 'grid-view', component: GridViewComponent, data: { text: 'Grid View' } }, { path: 'list-view', component: ListViewComponent, data: { text: 'List View' } }, { path: 'chart', component: ChartComponent, data: { text: 'Chart' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterViewRoutingModule {
}
