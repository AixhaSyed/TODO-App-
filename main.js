function addList(myTable) {
    if (document.getElementById("first")['value'] != "") {
        var table = document.getElementById(myTable);
        var rowCount = table['rows'].length;
        var row = table['insertRow'](rowCount);
        var b = document.getElementById("first")['value'];
        var cell1 = row.insertCell(0);
        var element1 = document.createElement("input");
        element1.type = "text";
        element1.style.width = "100%";
        // element1.style.height= "150%" ;
        // element1.style.marginRight= "150px";
        // element1.style.marginLeft= "70px";
        element1.name = "txtbox[]";
        element1['value'] = b;
        cell1.appendChild(element1);
        var cell2 = row.insertCell(1);
        var element2 = document.createElement("input");
        element2.type = "checkbox";
        element2.style.width = "100%";
        // element2.style.marginLeft= "70%"
        // element2.style.marginRight= "120%"
        element2.name = "chkbox[]";
        cell2.appendChild(element2);
        document.getElementById("first")['value'] = " ";
        document.getElementById('total').innerHTML = rowCount + 1;
        document.getElementById('total').innerHTML = rowCount + 1;
    }
    else {
        alert("Please Enter your Task!");
    }
}
function deleteList(myTable) {
    var table = document.getElementById(myTable);
    var rowCount = table['rows'].length;
    for (var i = 0; i < rowCount; i++) {
        var row = table['rows'][i];
        var chkbox = row.cells[1].childNodes[0];
        if (null != chkbox && true == chkbox.checked) {
            table['deleteRow'](i);
            rowCount--;
            i--;
            document.getElementById('total').innerHTML = rowCount;
        }
    }
}
