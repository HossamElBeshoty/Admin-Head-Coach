import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from './data.service';
import {IUserSubscription} from '../Models/i-user-subscription';
import {IUserAccount} from '../Models/i-user-account';

@Injectable({
  providedIn: 'root',
})
export class UserAccountService {
  userSubscription = {} as IUserSubscription;
  userAccount = {} as IUserAccount;

  constructor(private fb: FormBuilder, private dataService: DataService) {
  }

  formModel = this.fb.group({
    Email: ['', Validators.compose([Validators.required, Validators.email])],
    Name: ['', Validators.required],
    UserName: ['', Validators.required],
    PhoneNumber: ['', Validators.required],
    subscriptionsId: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      ConfirmPassword: ['', Validators.required],
    }, {validators: this.compareUserRegistrationPasswords}),
  });
  changePasswordFormModel = this.fb.group({
    oldPassword: ['', Validators.required],
    passwords: this.fb.group({
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      changePassword: ['', Validators.required],
    }, {validators: this.compareUserConfirmPassword}),
  });

  compareUserRegistrationPasswords(fb: FormGroup) {
    const confirmPasswordControl = fb.get('ConfirmPassword');
    if (confirmPasswordControl.errors === null || 'passwordMismatch' in confirmPasswordControl.errors) {
      if (fb.get('Password').value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({passwordMismatch: true});
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  compareUserConfirmPassword(fb: FormGroup) {
    const confirmPasswordControl = fb.get('changePassword');
    if (confirmPasswordControl.errors === null || 'passwordMismatch' in confirmPasswordControl.errors) {
      if (fb.get('newPassword').value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({passwordMismatch: true});
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  registerUserInfo(matchCount) {
    const data = {
      email: this.formModel.value.Email,
      password: this.formModel.value.Passwords.Password,
      confirmPassword: this.formModel.value.Passwords.ConfirmPassword,
      name: this.formModel.value.Name,
      phoneNumber: this.formModel.value.PhoneNumber,
      userName: this.formModel.value.UserName,
      matchesCount: matchCount,
      subscriptionsId: this.formModel.value.subscriptionsId,
    };
    return this.dataService.add('api/Account/Register', data);
  }

  changeUserPassword() {
    const data = {
      oldPassword: this.changePasswordFormModel.value.oldPassword,
      newPassword: this.changePasswordFormModel.value.passwords.newPassword,
      confirmPassword: this.changePasswordFormModel.value.passwords.changePassword,
    };
    return this.dataService.add('api/Account/ChangePassword', data);
  }

  getAllUsers() {
    return this.dataService.get('api/Account/AllUsers');
  }

  getUserSubscriptions(id: string) {
    return this.dataService.get('api/UserSubscription/getAllByUserId/' + id);
  }

  getVerificationCode(userId: string) {
    return this.dataService.get('api/Account/Activation/' + userId);
  }

  checkVerificationCode(verifyCode: string, userId: string) {
    return this.dataService.get(`api/Account/VerifyCode?verifyCode=${verifyCode}&userId=${userId}`);
  }

  getUserById(userId) {
    return this.dataService.get(`api/Account/Users/${userId}`);
  }

  addUserSubscription() {
    return this.dataService.add('api/UserSubscription', this.userSubscription);
  }

  editUser() {
    return this.dataService.edit('api/Account/EditUser', this.userAccount);
  }
}
