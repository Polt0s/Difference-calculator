import yaml from 'js-yaml';
import ini from 'ini';

const parse = (config, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(config);
    case '.yaml':
      return yaml.safeLoad(config);
    case '.ini':
      return ini.parse(config);
    default:
      throw new Error(`Unknown order state: '${format}'!`);
  }
};

export default parse;
