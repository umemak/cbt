// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Example = {
    id: string
    name: string
    questions: Question[]
}

export type Question = {
    id: string
    body: string
    choices: Choice[]
    type: string
    answer: string
    explanation: string
}

export type Choice = {
    id: string
    text: string
    correct: boolean
}

export type Answer = {
    qid: string
    answer: string
    fixed: boolean
    flagged: boolean
}

export type Progress = {
    answers: Answer[]
}
