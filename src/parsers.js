import yaml from 'js-yaml';


const parsers = (format) => {
  switch (format) {
    case 'json':
      return JSON.parse(format);
    case 'yaml':
      return yaml.safeLoad(format);
    default:
      return `format ${format} not found.`;
  }
}

export default parsers;