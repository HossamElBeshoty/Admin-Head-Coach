import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserAccountService {

  constructor(private fb: FormBuilder) {
  }

  formModel = this.fb.group({
    Email: ['', Validators.compose([Validators.required, Validators.email])],
    Name: ['', Validators.required],
    PhoneNumber: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      ConfirmPassword: ['', Validators.required],
    }),
  });

}
