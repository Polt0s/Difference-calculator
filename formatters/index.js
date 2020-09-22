import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const formatter = (data, format) => {
  switch (format) {
    case 'stylish':
      return formatStylish(data);
    case 'plain':
      return formatPlain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`Unknown order state: '${format}'!`);
  }
};

export default formatter;
