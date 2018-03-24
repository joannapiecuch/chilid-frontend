import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {OrderByPipe} from '../../pipe/orderByPipe';
import {MomentModule} from 'angular2-moment';
import { ProfileComponent } from './profile.component';
import {DetailsComponent} from '../details/details.component';
import {CommentsComponent} from '../comments/comments.component';
import {UserService} from '../../service/user.service';
import {UserInterface} from '../../model/user.interface';


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


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        DetailsComponent,
        CommentsComponent,
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
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    component.user = UserMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should user first name is Harvey', () => {
    expect(component.user.firstName).toEqual('Harvey');
  });

  it('should number of followers equal 4433', () => {
    expect(component.user.followers).toEqual(4433);
  });
});
