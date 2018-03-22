import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import {ProfileComponent} from './component/profile/profile.component';
import { DetailsComponent } from './component/details/details.component';
import { CommentComponent } from './component/comment/comment.component';
import {UserService} from './service/user.service';


@NgModule({
  declarations: [
    ProfileComponent,
    DetailsComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    ProfileComponent
  ],
  providers: [UserService],
})
export class UserModule { }
