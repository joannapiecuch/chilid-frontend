import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from '../../model/user.interface';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() user: UserInterface;
  likes: number;
  followers: number;

  ngOnInit() {
    this.likes = this.user.likes;
    this.followers = this.user.followers;
  }

  addLike() {
    this.likes++;
  }

  addFollower() {
    this.followers++;
  }
}
