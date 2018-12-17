# nativescript-rootjail

Simply checks for rooted Android using https://github.com/scottyab/rootbeer and jailbroken iOS using https://github.com/thii/DTTJailbreakDetection

## Installation

```javascript
"dependencies": {
    "nativescript-rootjail": "git+https://github.com/yikmunleong/nativescript-rootjail.git"
}
```

## Usage 
	
```javascript
const { isRootJail } = require('nativescript-rootjail');
if ( isRootJail() ) {
    //do something
}
```
    
## License

Apache License Version 2.0, January 2004
