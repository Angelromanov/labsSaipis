table = document.getElementById("table");
coll = document.getElementById("coll");
roww = document.getElementById("roww");
btn_add = document.getElementById('btn_add');
btn_delF = document.getElementById('btn_delF');
btn_delL = document.getElementById('btn_delL');
up = document.getElementById("up");
right = document.getElementById("right");
tr = document.querySelector("tr");

var countCol = 0;
document.getElementById("countCol").innerHTML = countCol;
var countRow = 0;
document.getElementById("countRow").innerHTML = countRow;

word1 = document.getElementById("Word1");
word2 = document.getElementById("Word2");
word3 = document.getElementById("Word3");
word4 = document.getElementById("Word4");

btn_add.addEventListener('click', () => {
    if (coll.checked == true) {
        if (up.selected) {
            countRow++;
            let row = table.insertRow(0);

            for (let i = 1; i <= tr.querySelectorAll("td").length; i++) {
                document.getElementById("countRow").innerHTML = countRow;
                let cell = row.insertCell(0);
                CheckWord(cell);
            }
        }
        else {
            countRow++
            let row = table.insertRow(table.rows.length);

            for (let i = 1; i <= tr.querySelectorAll("td").length; i++) {
                document.getElementById("countRow").innerHTML = countRow;
                let cell = row.insertCell(0);
                CheckWord(cell);
            }
        }
    }
    else {
        if (right.selected) {

            countCol++
            document.getElementById("countCol").innerHTML = countCol;

            document.querySelectorAll("tr").forEach(element => {
                let td = document.createElement("td");
                element.append(td);
                CheckWord(td);
            });
        }
        else {
            countCol++
            document.getElementById("countCol").innerHTML = countCol;

            document.querySelectorAll("tr").forEach(element => {
                let td = document.createElement("td");
                element.prepend(td);
                CheckWord(td);
            });
        }
    }
})

btn_delF.addEventListener('click', () => {
    if (document.querySelectorAll("tr").length !== 1) {
        document.querySelector("tr").parentNode.removeChild(document.querySelector("tr"));
    } else alert("Нельзя удалить последнюю строку!");
})

btn_delL.addEventListener('click', () => {
    if (document.querySelectorAll("tr").length !== 1) {
        tbody = document.querySelector("tbody");
        tbody.removeChild(tbody.lastElementChild);
    } else alert("Нельзя удалить последнюю строку!");
})

function CheckWord(cell) {
    if (word1.selected) {
        cell.innerHTML = word1.value;
    }
    if (word2.selected) {
        cell.innerHTML = word2.value;
    }
    if (word3.selected) {
        cell.innerHTML = word3.value;
    }
    if (word4.selected) {
        cell.innerHTML = word4.value;
    }
}