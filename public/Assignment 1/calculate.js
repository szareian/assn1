//
// var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22,
//   88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44,
//   70.54, 90.0, 71.11, 80.01];

// parsefloat

var lower_boundary = [];

lower_boundary = {
  max:0,
  aPlus:0,
  a:0,
  aMinus:0,
  bPlus:0,
  b:0,
  bMinus:0,
  cPlus:0,
  c:0,
  cMinus:0,
  d:0,
  f:0
};


function getRowId(id){
  // alert(document.getElementById(id).value)
  lolol = ""
  try{
    lolol = document.getElementById(id).value;

  } catch (e) {
    // do nothing
  }

  num = parseFloat(lolol)
  // alert(num)

  // return parseFloat(document.getElementById(id).value);
  return num;

  // return parseFloat(document.getElementById(id).value);
  // console.log(x);
}

function set_boundaries(){
  lower_boundary.max = getRowId("max");
}

function pressedSomething(){
  maxVal = getRowId("max")

  alert(maxVal)

}

alert(getRowId('max'));


console.log(set_boundaries());







// console.log(getRowId('max'));


// function myFunction() {
//     x = document.getElementById("boundary").style.backgroundColor = "red";
//     return x;
// }

// function myfunction(){
//   // Get table object
//   var myTable = document.getElementById('t1').tBodies[0];
//
//            // first loop for each row
//   for (var r=0, n = myTable.rows.length; r < n; r++) {
//     // this loop is getting each colomn/cells
//     for (var c = 0, m = myTable.rows[r].cells.length; c < m; c++) {
//       if(myTable.rows[r].cells[c].childNodes[0].value){
//       // get letter grades
//       var letterGrade = myTable.rows[r].cells[1].innerHTML;
//       alert(letterGrade);
//       // get student marks in each text boxes
//       var marks = myTable.rows[r].cells[c].childNodes[0].value;
//       alert(marks);
//       }
//     }
//   }
// }
