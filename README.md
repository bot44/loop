# loop

## Installation

```
$ npm install bot44-loop
```

## Usage

```
const loop = require('bot44-loop');
const sleep = require('bot44-sleep');

function say(word) {
    return () => {
        console.log(word);
        return sleep(1000);
    };
}

loop(say('Hello world!'));
```

## License

MIT