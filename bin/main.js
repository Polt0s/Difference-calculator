import program from 'commander';
import genDiff from '../src/gendiff.js'


program.version('0.0.1')
program.description('Compares two configuration files and shows a difference.')
program.arguments('<filepath1> <filepath2>')
program.helpOption('-h, --help', 'output usage information');
program.option('-f, --format [type]', 'output format', 'tree');
if (typeof filepath1Value !== 'undefined' || typeof filepath2Value !== 'undefined') {
  console.error('no command given!');
  process.exit(1);
}
program.action((filepath1, filepath2) => {
  const proba = genDiff(filepath1, filepath2, program.format);
  console.log(proba)
})
program.parse(process.argv);
