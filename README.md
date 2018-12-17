# nativescript-rootjail

Simply checks for rooted Android using https://github.com/scottyab/rootbeer and jailbroken iOS using https://github.com/thii/DTTJailbreakDetection

## Installation

```javascript
tns plugin add nativescript-rootjail
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
