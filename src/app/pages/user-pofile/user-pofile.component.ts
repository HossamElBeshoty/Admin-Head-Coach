import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../../Service/user-account.service';
import {ActivatedRoute} from '@angular/router';
import {IUserAccount} from '../../Models/i-user-account';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'ngx-user-pofile',
  templateUrl: './user-pofile.component.html',
  styleUrls: ['./user-pofile.component.scss'],
})
export class UserPofileComponent implements OnInit {
  userId: string;
  userData: IUserAccount;
  apiEndPoint = environment.apiEndPoint;
  displayUserAccountProfile: boolean = false;
  displayUserAccountProfileImage: boolean = false;

  constructor(public userAccountService: UserAccountService, private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.userId = this.activatedRouter.snapshot.params.id;
    this.getUser();
  }

  getUser() {
    this.userAccountService.getUserById(this.userId).subscribe(res => {
      this.userData = res as IUserAccount;
    });
  }

  showUserAccountImageDialog() {
    this.displayUserAccountProfileImage = true;
  }

  showUserAccountDialog() {
    this.displayUserAccountProfile = true;
  }
}
