import { Question } from '../../../../shared/interfaces/question.interface';

export interface AllQuestionsState {
  id: string,
  question: string,
  createdAt: Date,
  updatedAt: Date
}
