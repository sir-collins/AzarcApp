import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UserProfile } from 'src/app/models/user-profile.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {
  @Input() user: 0 | UserProfile | null | undefined = <UserProfile>{};

  @Output() onUpdateValue = new EventEmitter<UserProfile>();

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: [''],
    region: [''],
    town: [''],
    country: [''],
    officeLocation: [''],
    phoneNumber: [''],
    emailAddress: [''],
    postalCode: [''],
    id: [0],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.user && this.user.id) {
      this.profileForm.patchValue({
        ...this.user,
      });
    }
  }
  onUpdate() {
    const { value, valid } = this.profileForm;
    this.onUpdateValue.emit(value as UserProfile);
  }

  get getRegion(): string | null {
    return (this.profileForm.get('region') as FormControl).value;
  }

  get getFirstName(): string | null {
    return (this.profileForm.get('firstName') as FormControl).value;
  }

  get getLastName(): string | null {
    return (this.profileForm.get('lastName') as FormControl).value;
  }
  get getEmail(): string | null {
    return (this.profileForm.get('emailAddress') as FormControl).value;
  }
  get getPhone(): string | null {
    return (this.profileForm.get('phoneNumber') as FormControl).value;
  }
  get getWorkOffice(): string | null {
    return (this.profileForm.get('officeLocation') as FormControl).value;
  }
  get getCountry(): string | null {
    return (this.profileForm.get('country') as FormControl).value;
  }
  get getTown(): string | null {
    return (this.profileForm.get('town') as FormControl).value;
  }

  get getAddress(): string | null {
    return (this.profileForm.get('address') as FormControl).value;
  }

  get getPostalCode(): string | null {
    return (this.profileForm.get('postalCode') as FormControl).value;
  }

  /* firstName: [''],
    lastName: [''],
    address: [''],
    region: [''],
    town: [''],
    country: [''],
    officeLocation: [''],
    phoneNumber: [''],
    emailAddress: [''],
    postalCode: [''],
    id: [0], */
}
