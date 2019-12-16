import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../../Service/user-account.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-user-pofile',
  templateUrl: './user-pofile.component.html',
  styleUrls: ['./user-pofile.component.scss'],
})
export class UserPofileComponent implements OnInit {
  userId: string;

  constructor(public userAccountService: UserAccountService, private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.userId = this.activatedRouter.snapshot.params.id;
    this.getUser();
  }

  getUser() {
    this.userAccountService.getUserById(this.userId).subscribe(res => {
      console.log(res);
    });
  }
}
