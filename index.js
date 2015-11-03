import curry from 'instant-curry';

export default curry( (prop, obj) => obj[ prop ] );
