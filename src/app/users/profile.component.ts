import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ems-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: [this.authSvc.currentUser?.firstName, Validators.required],
      lastName: [this.authSvc.currentUser?.lastname, Validators.required],
    });
  }

  validateFirstName(): boolean {
    return (
      this.profileForm.controls.firstName.valid ||
      this.profileForm.controls.firstName.untouched
    );
  }

  validateLastName(): boolean {
    return (
      this.profileForm.controls.lastName.valid ||
      this.profileForm.controls.lastName.untouched
    );
  }

  onSubmit(formValue) {
    if (this.profileForm.valid) {
      this.authSvc.updateProfile(formValue.firstName, formValue.lastName);
      this.router.navigate(['/events']);
    }
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
