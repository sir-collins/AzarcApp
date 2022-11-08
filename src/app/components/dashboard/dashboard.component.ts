import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input() userDetails = <SocialUser>{};

  constructor(private router: Router) {}

  ngOnInit(): void {}

  signOut(): void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }
}
