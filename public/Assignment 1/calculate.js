var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22,
  88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44,
  70.54, 90.0, 71.11, 80.01];


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
  a = "";
  a = parseFloat(document.getElementById(id).value);
  return a;
  // return parseFloat(document.getElementById(id).value);
  // console.log(x);
}


function set_boundaries(){
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
}

// console.log(lower_boundary);


var histogram = {
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

function reset() {
  // var histogram = {
  //   aPlus:0,
  //   a:0,
  //   aMinus:0,
  //   bPlus:0,
  //   b:0,
  //   bMinus:0,
  //   cPlus:0,
  //   c:0,
  //   cMinus:0,
  //   d:0,
  //   f:0
  // };

  histogram.aPlus = 0
  histogram.a = 0;
  histogram.aMinus = 0;
  histogram.bPlus = 0;
  histogram.b = 0;
  histogram.bMinus = 0;
  histogram.cPlus = 0;
  histogram.c = 0;
  histogram.cMinus = 0;
  histogram.d = 0;
  histogram.f = 0;


  console.log('doodoo');
  document.getElementById("A+").value = "";
  document.getElementById("A").value = "";
  document.getElementById("A-").value = "";
  document.getElementById("B+").value = "";
  document.getElementById("B").value = "";
  document.getElementById("B-").value = "";
  document.getElementById("C+").value = "";
  document.getElementById("C").value = "";
  document.getElementById("C-").value = "";
  document.getElementById("D").value = "";
  document.getElementById("F").value = "";
}

function setup_histogram() {
  set_boundaries();
  for (var i = 0; i < grades.length; i++) {
    if (lower_boundary.max > grades[i] && grades[i] >= lower_boundary.aPlus ) {
      histogram.aPlus++;
    }
    else if (lower_boundary.aPlus > grades[i] && grades[i] >= lower_boundary.a) {
      histogram.a++;
    }
    else if (lower_boundary.a > grades[i] && grades[i] >= lower_boundary.aMinus) {
      histogram.aMinus++;
    }
    else if (lower_boundary.aMinus > grades[i] && grades[i] >= lower_boundary.bPlus) {
      histogram.bPlus++;
    }
    else if (lower_boundary.bPlus > grades[i] && grades[i] >= lower_boundary.b) {
      histogram.b++;
    }
    else if (lower_boundary.b > grades[i] && grades[i] >= lower_boundary.bMinus ) {
      histogram.bMinus++;
    }
    else if (lower_boundary.bMinus > grades[i] && grades[i] >= lower_boundary.cPlus) {
      histogram.cPlus++;
    }
    else if (lower_boundary.cPlus > grades[i] && grades[i] >= lower_boundary.c) {
      histogram.c++;
    }
    else if (lower_boundary.c > grades[i] && grades[i] >= lower_boundary.cMinus) {
      histogram.cMinus++;
    }
    else if (lower_boundary.cMinus > grades[i] && grades[i] >= lower_boundary.d) {
      histogram.d++;
    }
    else if (lower_boundary.d > grades[i] && grades[i] >= lower_boundary.f) {
      histogram.f++;
    }
    else{
     console.log('out of range!');
    }

  }
  // console.log(lower_boundary);
}


function draw_histogram() {
  setup_histogram();
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
  // console.log(lower_boundary);
  console.log(histogram);
  console.log(histogram.aPlus + histogram.a + histogram.aMinus + histogram.bPlus +
    histogram.b + histogram.bMinus + histogram.cPlus + histogram.c + histogram.cMinus
    + histogram.d + histogram.f);
}

draw_histogram();
