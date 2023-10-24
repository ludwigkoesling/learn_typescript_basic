import { MatchResult } from './MatchResult';

// describes the order of data we handle, but doesn't(!) convert it automatically
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
