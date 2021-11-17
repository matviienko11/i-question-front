export interface Question {
  id: string,
  question: string,
  category: string;
  average_difficulty: number;
  average_rating: number;
  createdAt: Date,
  updatedAt: Date
}
