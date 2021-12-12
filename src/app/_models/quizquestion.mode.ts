export interface QuizQuestion
{
    id: number,
    name: string;
    quiz_id: number,
    option1: string,
    option2: string,
    option3: string,
    option4: string,
    answer: number
}