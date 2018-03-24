import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ProfileComponent} from './user/component/profile/profile.component';
import {DetailsComponent} from './user/component/details/details.component';
import {CommentsComponent} from './user/component/comments/comments.component';
import {OrderByPipe} from './user/pipe/orderByPipe';
import {MomentModule} from 'angular2-moment';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user/service/user.service';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProfileComponent,
        DetailsComponent,
        CommentsComponent,
        OrderByPipe,
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
