import {TestBed, async} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {MomentModule} from 'angular2-moment';
import {AppComponent} from './app.component';
import {UserProfileComponent} from './user/component/user-profile/user-profile.component';
import {DetailsComponent} from './user/component/details/details.component';
import {CommentsComponent} from './user/component/comments/comments.component';
import {OrderByPipe} from './user/pipe/orderByPipe';
import {UserService} from './user/service/user.service';
import {ModalComponent} from '../shared/modal/modal.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserProfileComponent,
        DetailsComponent,
        CommentsComponent,
        OrderByPipe,
        ModalComponent
      ],
      imports: [
        MomentModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [
        UserService,
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
