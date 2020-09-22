import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { Summary } from './Summary'
import { HtmlReport } from './reportTargets/HtmlReports'

// const reader = new MatchReader('football.csv')
// reader.read()
// Create an object that satifies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass in something satisfying 
// the 'DataReader' interface  
const matchReader = new MatchReader(csvFileReader);
matchReader.load()

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport()
  );

summary.buildAndPrintReport(matchReader.matches)

