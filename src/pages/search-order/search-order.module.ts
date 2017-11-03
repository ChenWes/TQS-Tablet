import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchOrderPage } from './search-order';

@NgModule({
  declarations: [
    SearchOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchOrderPage),
  ],
})
export class SearchOrderPageModule {}
