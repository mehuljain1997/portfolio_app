import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { TransactionaldetailComponent } from './transactionaldetail/transactionaldetail.component';

const routes: Routes = [
  { path: '',redirectTo: '/portfolios', pathMatch: 'full'},
  {path: 'portfolios',component: PortfoliosComponent},
  {path: 'transactional/:id',component: TransactionaldetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
