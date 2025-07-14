import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-registration.html',
  styleUrl: './user-registration.css',
})
export class UserRegistration {
  registrationForm: FormGroup;
  cities: string[] = [];
  hobbies: string[] = [];

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group(
      {
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        gender: ['', Validators.required],
        hobbies: [[]],
        country: ['', Validators.required],
        city: [''],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  get f() {
    return this.registrationForm.controls;
  }

  onHobbyChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    if (input.checked) {
      this.hobbies.push(value);
    } else {
      this.hobbies = this.hobbies.filter((h) => h !== value);
    }
    this.registrationForm.patchValue({ hobbies: this.hobbies });
  }
  onCountryChange(event: Event) {
    const country = event.target as HTMLSelectElement;
    const value = country.value;
    if (value == 'bd') {
      this.cities = ['Dhaka', 'Chittagong', 'Rajshahi'];
    } else if (value === 'ca') {
      this.cities = ['Toronto', 'Vancouver', 'Montreal'];
    } else {
      this.cities = [];
    }
    this.registrationForm.patchValue({ city: '' });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      alert(
        'Registration Data:\n' +
          JSON.stringify(this.registrationForm.value, null, 2)
      );
      this.registrationForm.reset();
      this.cities = [];
      this.hobbies = [];
    } else {
      alert('Please complete the form correctly.');
    }
  }
}
