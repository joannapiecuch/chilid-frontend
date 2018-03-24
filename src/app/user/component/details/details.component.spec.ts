import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
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

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    component.user = UserMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should number of likes equal 121', () => {
    expect(component.user.likes).toEqual(121);
  });

  it('should increase number of likes ', () => {
    component.addLike();
    expect(component.user.likes).toEqual(component.user.likes++);
  });

  it('should increase number of followers ', () => {
    component.addFollower();
    expect(component.user.followers).toEqual(component.user.followers++);
  });

});
