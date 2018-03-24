import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';

import {MomentModule} from 'angular2-moment';
import {CommentsComponent} from './comments.component';
import {OrderByPipe} from '../../pipe/orderByPipe';
import {CommentInterface} from '../../model/comment.interface';
import {UserInterface} from '../../model/user.interface';
import {NgxAutoScroll, NgxAutoScrollModule} from 'ngx-auto-scroll';


const CommentMock: CommentInterface = {
  owner: {
    firstName: 'John',
    lastName: 'Doe',
    avatar: '',
  },
  content: 'Test comment',
  creationDate: new Date(),
};

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
  comments: [CommentMock]
};

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommentsComponent,
        OrderByPipe
      ],
      imports: [
        MomentModule,
        ReactiveFormsModule,
        NgxAutoScrollModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    component.user = UserMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should comment owner first name is John', () => {
    expect(component.user.comments[0].owner.firstName).toEqual('John');
  });

  it('should comments length equal 1', () => {
    expect(component.user.comments.length).toEqual(1);
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('content field validity', () => {
    const content = component.form.controls['content'];
    expect(content.valid).toBeFalsy();
  });

  it('should recognize ngxAutoScroll', () => {
    const ngxAutoScroll: NgxAutoScroll = fixture.componentInstance.ngxAutoScroll;
    expect(ngxAutoScroll).toBeDefined();
  });
});
