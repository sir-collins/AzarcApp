import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() userDetails = <SocialUser>{};
  @Input() loggedIn = false;

  @Output() logOut = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  signOut(): void {
    this.logOut.emit();
  }
}
