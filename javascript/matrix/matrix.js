// Matrix converts a @param string values into a two dimensional array
// which consists of columns and rows
var Matrix = function(values) {
  var rows = values.split('\n');
      this.rows = [];
      this.columns = [];

  // Populate this.rows with an array for each of the rows provided in values
  for(var i=0; i<rows.length; i++) {
    var tmp = rows[i];
    this.rows[i] = tmp.split(' ').map(function(j) { return parseInt(j); });
//    console.log('This.rows['+i+']: '+this.rows[i] );
  }

  // Populate this.columns with an array for each of the columns provided in values
  for(var i=0; i<this.rows[0].length; i++) {
    var tmp = [];
    for(var j=0; j<this.rows.length; j++) {
      tmp.push( this.rows[j][i] );
    }
    this.columns[i] = [...tmp];
//    console.log('This.columns['+i+']: '+this.columns[i]);
  }

//  console.log('MTX returning this.rows: '+this.rows+' and this.columns: '+this.columns);
};

module.exports = Matrix;
