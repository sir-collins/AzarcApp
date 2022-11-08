import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// containers
import * as fromContainers from './containers';
// guards
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        canActivate: [fromGuards.UsersGuard],
        component: fromContainers.UsersViewComponent,
      },
      {
        path: 'create',
        canActivate: [],
        component: fromContainers.UserItemComponent,
      },
      {
        path: ':userId',
        canActivate: [fromGuards.UserExistsGuard],
        component: fromContainers.UserItemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
