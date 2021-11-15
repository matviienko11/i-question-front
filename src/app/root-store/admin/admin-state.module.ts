import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersEffects } from './users/effects/users.effects';
import { UsersService } from '../../modules/admin/services/users.service';
import { QuestionsEffects } from './questions/effects/questions.effects';
import { usersReducer } from './users/reducers/users.reducers';
import { questionsReducer } from './questions/reducers/questions.reducers';

const reducers = {
  users: usersReducer,
  questions: questionsReducer
}

@NgModule({
  imports: [
    StoreModule.forFeature('admin', reducers),
    EffectsModule.forFeature([
      UsersEffects,
      QuestionsEffects
    ])
  ],
  providers: [UsersService]
})
export class AdminStateModule {}
