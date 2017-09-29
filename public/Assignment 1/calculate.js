
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


// function myfunction() {
//   m = setInterval(getRowId,100);
//
// }


function getRowId(id){
  a = "";
     a = parseFloat(document.getElementById(id).value);


  // num = parseFloat(lolol);
  // alert(num)

  return a;

  // return parseFloat(document.getElementById(id).value);
  // console.log(x);
}


function set_boundaries(){
  try {
    lower_boundary.max = getRowId("max");
    lower_boundary.aPlus = getRowId("aPlus");
    lower_boundary.a = getRowId("a");
    lower_boundary.aMinus = getRowId("aMinus");
    lower_boundary.bPlus = getRowId("bPlus");
    lower_boundary.b = getRowId("b");
    lower_boundary.bMinus = getRowId("bMinus");
    lower_boundary.cPlus = getRowId("cPlus");
    lower_boundary.c = getRowId("c");
    lower_boundary.cMinus = getRowId("cMinus");
    lower_boundary.d = getRowId("d");
    lower_boundary.f = getRowId("f");
  } catch (e) {
    // do nothing
  }
}

// console.log(lower_boundary);
var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22,
  88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44,
  70.54, 90.0, 71.11, 80.01];

set_boundaries();
var histogram = {
  aPlus:1,
  a:3,
  aMinus:3,
  bPlus:2,
  b:1,
  bMinus:4,
  cPlus:1,
  c:2,
  cMinus:2,
  d:3,
  f:0
};

for (var i = 0; i < grades.length; i++) {
  // console.log(grades[i]);
  if (lower_boundary.max > grades[i] > lower_boundary.aPlus ) {
    histogram.aPlus++;
  }
  else if (lower_boundary.aPlus > grades[i] > lower_boundary.a) {
    histogram.a++;
  }
  else if (lower_boundary.a > grades[i] > lower_boundary.aMinus) {
    histogram.aMinus++;
  }
  else if (lower_boundary.aMinus > grades[i] > lower_boundary.bPlus) {
    histogram.bPlus++;
  }
  else if (lower_boundary.bPlus > grades[i] > lower_boundary.b) {
    histogram.b++;
  }
  else if (lower_boundary.b > grades[i] > lower_boundary.bMinus ) {
    histogram.bMinus++;
  }
  else if (lower_boundary.bMinus > grades[i] > lower_boundary.cPlus) {
    histogram.cPlus++;
  }
  else if (lower_boundary.cPlus > grades[i] > lower_boundary.c) {
    histogram.c++;
  }
  else if (lower_boundary.c > grades[i] > lower_boundary.cMinus) {
    histogram.cMinus++;
  }
  else if (lower_boundary.cMinus > grades[i] > lower_boundary.d) {
    histogram.d++;
  }
  else if (lower_boundary.d > grades[i] > lower_boundary.f) {
    histogram.f++;
  }
  else{
    // histogram.doodoo++;
   console.log('out of range!');
  }
}


console.log(histogram);
console.log(set_boundaries());

// alert(getRowId('bPlus'));


function draw_histogram() {
  var smiley_face = "&#9786; ";
  document.getElementById("A+").innerHTML = smiley_face.repeat(histogram.aPlus);
  document.getElementById("A").innerHTML = smiley_face.repeat(histogram.a);
  document.getElementById("A-").innerHTML = smiley_face.repeat(histogram.aMinus);
  document.getElementById("B+").innerHTML = smiley_face.repeat(histogram.bPlus);
  document.getElementById("B").innerHTML = smiley_face.repeat(histogram.b);
  document.getElementById("B-").innerHTML = smiley_face.repeat(histogram.bMinus);
  document.getElementById("C+").innerHTML = smiley_face.repeat(histogram.cPlus);
  document.getElementById("C").innerHTML = smiley_face.repeat(histogram.c);
  document.getElementById("C-").innerHTML = smiley_face.repeat(histogram.cMinus);
  document.getElementById("D").innerHTML = smiley_face.repeat(histogram.d);
  document.getElementById("F").innerHTML = smiley_face.repeat(histogram.f);
}

draw_histogram()
