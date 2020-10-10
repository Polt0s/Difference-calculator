import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const format = (data, type) => {
  switch (type) {
    case 'stylish':
      return formatStylish(data);
    case 'plain':
      return formatPlain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`Unknown order state: '${type}'!`);
  }
};

export default format;
