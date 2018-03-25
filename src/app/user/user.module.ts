import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MomentModule} from 'angular2-moment';
import {NgxAutoScrollModule} from 'ngx-auto-scroll';
import {DetailsComponent} from './component/details/details.component';
import {UserService} from './service/user.service';
import {CommentsComponent} from './component/comments/comments.component';
import {OrderByPipe} from './pipe/orderByPipe';
import {UserProfileComponent} from './component/user-profile/user-profile.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    UserProfileComponent,
    DetailsComponent,
    CommentsComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    NgxAutoScrollModule,
    SharedModule
  ],
  exports: [
    UserProfileComponent
  ],
  providers: [UserService],
})
export class UserModule {
}
