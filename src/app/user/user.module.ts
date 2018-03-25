import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MomentModule} from 'angular2-moment';
import {NgxAutoScrollModule} from 'ngx-auto-scroll';
import {ProfileComponent} from './component/profile/profile.component';
import {DetailsComponent} from './component/details/details.component';
import {UserService} from './service/user.service';
import {CommentsComponent} from './component/comments/comments.component';
import {OrderByPipe} from './pipe/orderByPipe';


@NgModule({
  declarations: [
    ProfileComponent,
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
  ],
  exports: [
    ProfileComponent
  ],
  providers: [UserService],
})
export class UserModule {
}
