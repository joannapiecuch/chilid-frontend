import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {OrderByPipe} from '../../pipe/orderByPipe';
import {MomentModule} from 'angular2-moment';
import {UserProfileComponent} from './user-profile.component';
import {DetailsComponent} from '../details/details.component';
import {CommentsComponent} from '../comments/comments.component';
import {UserService} from '../../service/user.service';
import {UserInterface} from '../../model/user.interface';
import {ModalComponent} from '../../../../shared/modal/modal.component';


const UserMock: UserInterface = {
  firstName: 'Harvey',
  lastName: 'Specter',
  avatar: '',
  country: 'New York',
  city: 'USA',
  likes: 121,
  following: 723,
  followers: 4433,
  totalComments: 353,
  comments: []
};


describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserProfileComponent,
        DetailsComponent,
        CommentsComponent,
        ModalComponent,
        OrderByPipe
      ],
      imports: [
        ReactiveFormsModule,
        MomentModule,
        HttpClientModule
      ],
      providers: [
        UserService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    component.user = UserMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('user first name is Harvey', () => {
    expect(component.user.firstName).toEqual('Harvey');
  });

  it('number of followers are equal 4433', () => {
    expect(component.user.followers).toEqual(4433);
  });
});
