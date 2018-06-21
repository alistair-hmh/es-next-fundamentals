const target = {foo: 'bar'};

const handler = {
	set: (target, prop, val) => {
		target[prop] = val.replace('👻', '🎃')
	}
}

const proxy = new Proxy(target, handler);

proxy.foo = 'BOO! 👻';

console.log(target.foo);
