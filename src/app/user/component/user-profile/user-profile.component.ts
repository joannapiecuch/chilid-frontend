import { Component, OnInit } from '@angular/core';

import {UserService} from '../../service/user.service';
import {UserInterface} from '../../model/user.interface';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public user: UserInterface;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((user: UserInterface) => {
      this.user = user;
    });
  }
}
