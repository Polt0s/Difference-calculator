# difference-calculator

[![main-CI](https://github.com/Polt0s/frontend-project-lvl2/workflows/main-CI/badge.svg)](https://github.com/Polt0s/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/ed9ae574eaa7a940c5a4/maintainability)](https://codeclimate.com/github/Polt0s/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ed9ae574eaa7a940c5a4/test_coverage)](https://codeclimate.com/github/Polt0s/frontend-project-lvl2/test_coverage)

# :page_facing_up: Description

Difference calculator - a program that determines the difference between two data structures.

## Utility features:

:round_pushpin: ```Support for different input formats: yaml, ini, json```

:round_pushpin: ```Generating a report in plain text, stylish and json format```

## Usage example:

### :grey_exclamation: format stylish

##### $ gendiff filepath1.json filepath2.json

```
{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```

[![asciicast](https://asciinema.org/a/mi1aL4b0ZqIbDkWlNjUzMQCgc.svg)](https://asciinema.org/a/mi1aL4b0ZqIbDkWlNjUzMQCgc)

### :grey_exclamation: format plain

##### $ gendiff --format plain path/to/file.ini another/path/file.json

```
Property 'common.follow' was added with value: false 
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed
```

[![asciicast](https://asciinema.org/a/ejGX9uXYjw7dBHoZqwsD2RDga.svg)](https://asciinema.org/a/ejGX9uXYjw7dBHoZqwsD2RDga)

### :grey_exclamation: format JSON

##### $ gendiff --format json path/to/file.ini another/path/file.json

```
[{"key":"common","type":"nested","children":[{"key":"follow","type":"added","value":false},{"key":"setting1","type":"unchanged","value":"Value 1"},{"key":"setting2","type":"deleted","value":200},{"key":"setting3","type":"changed","newValue":true,"oldValue":{"key":"value"}},{"key":"setting4","type":"added","value":"blah blah"},{"key":"settin
```
[![asciicast](https://asciinema.org/a/JECYxrhlk0RRAWoCWelSngdcM.svg)](https://asciinema.org/a/JECYxrhlk0RRAWoCWelSngdcM)
