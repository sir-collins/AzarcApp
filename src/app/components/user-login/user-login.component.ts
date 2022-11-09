import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.sass'],
})
export class UserLoginComponent implements OnInit {
  @Input() loggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
