import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';

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
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: [
        this.authSvc.currentUser?.firstName,
        [Validators.required, Validators.pattern('[a-zA-Z].*')],
      ],
      lastName: [
        this.authSvc.currentUser?.lastname,
        [Validators.required, Validators.pattern('[a-zA-Z].*')],
      ],
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
      this.toastr.success('Saved successful');
      this.router.navigate(['/events']);
    }
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
