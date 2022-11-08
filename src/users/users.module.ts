import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { EffectsModule, Actions } from '@ngrx/effects';

import { reducer } from './store/reducers/user.reducer';
import { effects } from './store/effects';

import * as fromServices from './services';
import * as fromGuards from './guards';

// components
import * as fromComponents from './components';
// containers
import * as fromContainers from './containers';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('users', reducer),
    EffectsModule.forFeature(effects),
  ],
  providers: [...fromServices.services, ...fromGuards.guards],
})
export class UsersModule {}
