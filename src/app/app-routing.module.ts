import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components';

import { HomeComponent } from './containers/home/home.component';

import * as fromContainers from '../app/containers';
// guards
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.FullLayoutComponent,
    canActivate: [],
  },
  {
    path: 'home',
    component: fromContainers.HomeLayoutComponent,
    canActivate: [],
    children: [
      {
        path: 'profile',
        //canActivate: [fromGuards.UserExistsGuard],
        component: fromContainers.UserProfileComponent,
      },
      {
        path: 'employees',
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
