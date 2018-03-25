import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ModalComponent} from './modal/modal.component';


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    ModalComponent
  ]
})
export class SharedModule {
}
