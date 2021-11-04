import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './reducers/user.reducers';
import { UserEffects } from './effects/user.effects';
import { QuestionsService } from '../../modules/user/modules/questions/services/questions.service';


@NgModule({
  imports: [
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [QuestionsService]
})
export class UserStateModule {}
