import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserInterface} from '../../model/user.interface';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() user: UserInterface;
  likes: number;
  followers: number;
  @Output() share: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

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
