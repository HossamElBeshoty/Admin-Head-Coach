import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  display: boolean = false;
  @Input() header: string;
  @Input() buttonCss: string;
  @Input() buttonName: string;
  @Input() iconClass: string;
  @Input() width: number;
  constructor() { }

  ngOnInit() {
  }
  showDialog() {
    this.display = true;
  }
}
