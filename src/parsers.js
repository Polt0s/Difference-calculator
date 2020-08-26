import yaml from 'js-yaml';
import ini from 'ini';

const parsers = (format) => {
  switch (format) {
    case 'json':
      return JSON.parse(format);
    case 'yaml':
      return yaml.safeLoad(format);
    case 'ini':
      return ini.parse(format);
    default:
      return `format ${format} not found.`;
  }
}

export default parsers;
