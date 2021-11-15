import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { allQuestionsReducer } from './all-questions/reducers/all-questions.reducers';
import { AllQuestionsEffects } from './all-questions/effects/all-questions.effects';
import { QuestionsService } from '../../modules/user/services/questions.service';

const reducers = {
  all_questions: allQuestionsReducer
}

@NgModule({
  imports: [
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([AllQuestionsEffects])
  ],
  providers: [QuestionsService]
})
export class UserStateModule {}
