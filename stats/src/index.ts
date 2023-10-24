import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTarget/ConsoleReport';
import { AverageGoalAnalysis } from './analyzer/AverageGoalAnalysis';

const csvFootball = 'football.csv';
const matchReader = MatchReader.fromCSV(csvFootball);
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);

const summaryNew = new Summary(new AverageGoalAnalysis(), new ConsoleReport());
summaryNew.buildAndPrintReport(matchReader.matches);
