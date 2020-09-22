import program from 'commander';
import gendiff from '../src/gendiff.js';

program.version('0.0.1');
program.description('Compares two configuration files and shows a difference.');
program.arguments('<filepath1> <filepath2>');
program.helpOption('-h, --help', 'output usage information');
program.option('-f, --format [type]', 'output format', 'stylish');
program.action((filepath1, filepath2) => {
  const output = gendiff(filepath1, filepath2, program.format);
  console.log(output);
});
program.parse(process.argv);
