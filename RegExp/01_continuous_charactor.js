
var continueChar = function( str ) {
  //const regexp = /(.)\1{4}/;
  //const regexp = /(.)\1{2,}/;
  const regexp = /(.)\1{2,}/;
  return regexp.test( str );
};

exports.continueChar = continueChar;
