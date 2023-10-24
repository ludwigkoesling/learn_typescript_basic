import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';

export class AverageGoalAnalysis implements Analyzer {
  run(matches: MatchData[]): string {
    let averageGoals = 0;

    for (let match of matches) {
      averageGoals += match[3] + match[4];
    }

    averageGoals = Math.round((averageGoals / matches.length) * 100) / 100;
    return `The average goal per game is ${averageGoals}`;
  }
}
