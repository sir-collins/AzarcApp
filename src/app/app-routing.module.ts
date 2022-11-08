import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [],
    children: [
      {
        path: 'employees',
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
  {
    path: 'login',
    component: UserLoginComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
