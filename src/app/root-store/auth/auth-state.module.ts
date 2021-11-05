import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { userInfoReducer } from './reducers/auth.reducers';
import { AuthEffects } from './effects/auth.effects';
import { AuthService } from '../../modules/auth/services/auth.service';


@NgModule({
  imports: [
    StoreModule.forFeature('user_info', userInfoReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthService]
})
export class AuthStateModule {
}
