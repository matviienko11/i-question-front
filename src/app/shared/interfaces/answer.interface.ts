import { Question } from './question.interface';
import { Status } from './status.enum';

export interface Answer {
  id: string;
  userId: string;
  questionId: string;
  answer: string;
  question: Question;
  status: Status;
  createdAt: string;
  updatedAt: string;
}
