import { Component, OnInit } from '@angular/core';

import {UserService} from '../../service/user.service';
import {UserInterface} from '../../model/user.interface';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user: UserInterface;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((user: UserInterface) => {
      this.user = user;
    });

  }
}
