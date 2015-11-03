import test from 'tape';
import prop from '../index';



test('Prop tests with objects', t => {

	t.plan(3);

	let o = { a: 1, b: 2, c: 3 };


	t.equal(2, prop('b', o), 'works all at once' );
	t.equal(3, prop('c')( o ), 'works when curried' );


	Promise.resolve({a: 1, b: 2, c: 3})
		.then(prop('b'))
		.then(function(v){
			t.equal(v, 2);
		});



});
