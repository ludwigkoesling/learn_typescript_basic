// Using enum - signaling to other engineers that this is a collection of very closely values
// should only be used for a small collection of values, which we know while compiling
export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}
