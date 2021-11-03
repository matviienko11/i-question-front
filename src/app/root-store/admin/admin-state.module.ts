import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './users/reducers/users.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users/effects/users.effects';
import { UsersService } from '../../modules/admin/modules/users/services/users.service';

const reducers = {
  users: usersReducer,
}

@NgModule({
  imports: [
    StoreModule.forFeature('admin', reducers),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [UsersService]
})
export class AdminStateModule {}
