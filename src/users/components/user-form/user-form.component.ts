import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/users/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() user!: 0 | User | null | undefined;

  @Output() onCreateValue = new EventEmitter<User>();
  @Output() onUpdateValue = new EventEmitter<User>();

  userForm = this.fb.group({
    firstName: ['', [Validators.required]],
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
      this.userForm.patchValue({
        ...this.user,
      });
    }
  }
  onCreate() {
    const { value, valid } = this.userForm;
    if (valid && !value.id) {
      this.onCreateValue.emit(value as User);
    } else if (value.id) {
      this.onUpdateValue.emit(value as User);
    }
  }
}
