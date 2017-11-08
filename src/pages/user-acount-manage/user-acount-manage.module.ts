import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAcountManagePage } from './user-acount-manage';

@NgModule({
  declarations: [
    UserAcountManagePage,
  ],
  imports: [
    IonicPageModule.forChild(UserAcountManagePage),
  ],
})
export class UserAcountManagePageModule {}
