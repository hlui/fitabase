x$(document).on("DOMContentLoaded", function() {

  var mw_popularChallengeTable = PopulateChallengeTable;
  PopulateChallengeTable = function() {
    mw_popularChallengeTable();

    SortTable();
    x$(".mw_loading").removeClass("mw_active");
  }
});

var sortedOn = 0;
SortTable = function() {
  var table = document.getElementById('teams');
  var tbody = table.getElementsByTagName('tbody')[0];
  var rows = tbody.getElementsByTagName('tr');

  var rowArray = new Array();
  for (var i=0, length=rows.length; i<length; i++) {
    rowArray[i] = new Object;
    rowArray[i].oldIndex = i;
    var steps = rows[i].getElementsByTagName('td')[1].innerHTML;
    steps = steps.replace(/^\s*([0-9.]+).*?$/, "$1");
    
    // delete avg steps per day from original table
    rows[i].getElementsByTagName('td')[1].innerHTML = steps;
    rowArray[i].value = steps;
  }

  rowArray.sort(RowCompare);
  rowArray.reverse();

  var newTbody = document.createElement('tbody');
  for (var i=0, length=rowArray.length ; i<length; i++) {
    newTbody.appendChild(rows[rowArray[i].oldIndex].cloneNode(true));
  }

  table.replaceChild(newTbody, tbody);
}

function RowCompare(a, b) { 
  var aVal = a.value.match(/^\s*([0-9.]+)\s*/);
  var bVal = b.value.match(/^\s*([0-9.]+)\s*/);
  aVal = parseFloat(aVal[1]);
  bVal = parseFloat(bVal[1]);

  return (aVal == bVal ? 0 : (aVal > bVal ? 1 : -1));
}

