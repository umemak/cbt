// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type Example = {
  eid: string;
  name: string;
  questions: Question[];
};

export type Question = {
  qid: string;
  body: string;
  choices: Choice[];
  type: string;
  answer: string;
  explanation: string;
};

export type Choice = {
  cid: string;
  text: string;
};

export type Answer = {
  qid: string;
  answer: string;
  fixed: boolean;
  flagged: boolean;
};
