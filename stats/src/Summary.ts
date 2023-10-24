import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzer/WinsAnalysis';
import { HtmlReport } from './reportTarget/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

// Works as coordinator between different classes
export class Summary {
  // preconfigured instance
  static winsAnalysisWithHtmlReport(team: string) {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
