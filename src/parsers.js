import yaml from 'js-yaml';
import ini from 'ini';

const parsers = (config, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(config);
    case '.yaml':
      return yaml.safeLoad(config);
    case '.ini':
      return ini.parse(config);
    default:
      return `format ${format} not found.`;
  }
}

export default parsers;
