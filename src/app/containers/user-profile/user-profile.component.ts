import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UserProfile } from 'src/app/models/user-profile.model';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @Input() user = <UserProfile>{};

  @Output() onUpdateValue = new EventEmitter<UserProfile>();

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: [''],
    region: [''],
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
}
