# loop

## Installation

```
$ npm install bot44-loop
```

## Usage

```
const loop = require('bot44-loop');

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || 0));
}

function say(word) {
    return () => {
        console.log(word);
        return wait(1000);
    };
}

loop(say('Hello world!'));
```

## License

MIT