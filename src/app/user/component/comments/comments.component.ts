import {Component, Input, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {NgxAutoScroll} from 'ngx-auto-scroll';
import {UserInterface} from '../../model/user.interface';


@Component
({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  @Input() user: UserInterface;
  @ViewChild(NgxAutoScroll) ngxAutoScroll: NgxAutoScroll;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      content: ['', [Validators.required]],
      owner: fb.group({
        firstName: 'John',
        lastName: 'Doe',
        avatar: 'assets/images/placeholder_user.svg'
      }),
    });
  }

  forceScrollDown(): void {
    this.ngxAutoScroll.forceScrollDown();
  }

  submit() {
    if (this.form.valid) {
      const formData = {...this.form.value, creationDate: new Date()};
      this.user.comments.push(formData);
      this.forceScrollDown();
      this.form.get('content').reset();
    }
  }
}
