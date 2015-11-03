# curried-prop

A curried application of grabbing a properties from objects


```
import prop from `curried-prop`;


prop('a', {a: 1, b: 2}); // 1
prop('b')({a: 1, b: 2}); // 2

Promise.resolve({a: 1, b: 2, c: 3})
	.then( prop('c') ); // promised value is now 3
```
