import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Azarc-App';
  user!: SocialUser;
  loggedIn = false;
  constructor(private authService: SocialAuthService, private router: Router) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }

  onLogOff(): void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }
}
