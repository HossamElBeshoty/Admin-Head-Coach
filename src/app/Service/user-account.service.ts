import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class UserAccountService {

  constructor(private fb: FormBuilder, private dataService: DataService) {
  }

  formModel = this.fb.group({
    Email: ['', Validators.compose([Validators.required, Validators.email])],
    Name: ['', Validators.required],
    UserName: ['', Validators.required],
    PhoneNumber: ['', Validators.required],
    MatchesCount: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      ConfirmPassword: ['', Validators.required],
    }, {validators: this.compareUserRegistrationPasswords}),
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

  registerUserInfo() {
    const data = {
      email: this.formModel.value.Email,
      password: this.formModel.value.Passwords.Password,
      confirmPassword: this.formModel.value.Passwords.ConfirmPassword,
      name: this.formModel.value.Name,
      phoneNumber: this.formModel.value.PhoneNumber,
      userName: this.formModel.value.UserName,
      matchesCount: this.formModel.value.MatchesCount,
    };
    return this.dataService.add('api/Account/Register', data);
  }

  getAllUsers() {
    return this.dataService.get('api/Account/AllUsers');
  }

  getUserSubscriptions(id: string) {
    return this.dataService.get('api/UserSubscription/getAllByUserId/' + id);
  }
}
