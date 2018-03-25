import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() url: string;
  @Input() openModal: boolean;
  @Output() modalIsClose: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('modal') modal: ElementRef;

  onClickedOutside(e: Event) {
    if (this.modal.nativeElement === e.target) {
      this.openModal = false;
      this.modalIsClose.emit(this.openModal = false);
    }
  }

  closeModal() {
    this.modalIsClose.emit(this.openModal = false);
  }
}
