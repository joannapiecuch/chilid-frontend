import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailsComponent} from './details.component';
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

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent, ModalComponent]
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

  it('number of likes are equal 121', () => {
    expect(component.user.likes).toEqual(121);
  });

  it('increase number of likes ', () => {
    component.addLike();
    expect(component.user.likes).toEqual(component.user.likes++);
  });

  it('increase number of followers ', () => {
    component.addFollower();
    expect(component.user.followers).toEqual(component.user.followers++);
  });

});
