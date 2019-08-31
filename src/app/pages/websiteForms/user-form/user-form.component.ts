import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  uploadedFiles: any[] = [];
  constructor() { }

  ngOnInit() {
  }
  onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
}
