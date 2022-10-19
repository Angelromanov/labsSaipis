nameAuto = document.getElementById("txt1");
fio = document.getElementById("txt2");
numAuto = document.getElementById("txt3");
time = document.getElementById("txt4");

btn1 = document.getElementById("btn1");

btn2 = document.getElementById("btn2");

btn3 = document.getElementById("btn3");

btn4 = document.getElementById("btn4");

btn5 = document.getElementById("btn5");

btn6 = document.getElementById("btn6");

btn7 = document.getElementById("btn7");

select1 = document.getElementById("select1");

var db = openDatabase('Laba5', '1.0', 'LAB5DB', 1000000);
if(!db) alert("Нет подключения к БД");

class Info {

    constructor(nameAuto, fio, numAuto, time) {
        this.nameAuto = nameAuto;
        this.fio = fio;
        this.numAuto = numAuto;
        this.time = time;
    }
}


let info = new Info("", "", "", "");

createList();

btn1.onclick = () => {

    var reg = /^\d+$/;
    var res = /^[a-zA-Zа-яА-Я]+$/
    if (nameAuto.value != "" && fio.value != "" && numAuto.value != "" && time.value != "") {
        if (reg.test(time.value)) {
            if (res.test(nameAuto.value) && res.test(fio.value)) {
                info.nameAuto = nameAuto.value;
                info.fio = fio.value;
                info.numAuto = numAuto.value;
                info.time = time.value;
                if (info.adress == undefined) {
                    var db = openDatabase('Laba5', '1.0', 'LAB5DB', 1000000);
                    db.transaction(function (tx) {
                        tx.executeSql('CREATE TABLE IF NOT EXISTS LAB5DB (nameAuto, fio, numAuto, time, adress)');
                        tx.executeSql('INSERT INTO LAB5DB (nameAuto, fio, numAuto, time, adress) VALUES (?,?,?,?,?)',
                            [info.nameAuto, info.fio, info.numAuto, info.time, "Не указано"]);
                    });
                    btn4.disabled = false;
                    btn5.disabled = false;
                    location.reload();
                    console.log(info);
                } else {
                    let adress = document.getElementById("txt5");
                    info.adress = adress.value;
                    var db = openDatabase('Laba5', '1.0', 'LAB5DB', 1000000);
                    db.transaction(function (tx) {
                        tx.executeSql('CREATE TABLE IF NOT EXISTS LAB5DB (nameAuto, fio, numAuto, time, adress)');
                        tx.executeSql('INSERT INTO LAB5DB (nameAuto, fio, numAuto, time, adress) VALUES (?,?,?,?,?)',
                            [info.nameAuto, info.fio, info.numAuto, info.time, info.adress]);
                    });
                    btn4.disabled = false;
                    btn5.disabled = false;
                    location.reload();
                    console.log(info);
                }
            }
            else {
                alert("Поле ФИО и название автомобиля не должны содержать цифры!!!!!");
            }
        }
        else {
            alert("Поле время стоянки должно содержать только цифры!!!!!");
        }
    }
    else{
        alert("Поля должны быть заполнены!!!!!");
    }
}

btn2.onclick = () => {
    document.getElementById('txt1').value = "";
    document.getElementById('txt2').value = "";
    document.getElementById('txt3').value = "";
    document.getElementById('txt4').value = "";
    document.getElementById('txt5').value = "";
    location.reload();
    btn4.disabled = false;
    btn5.disabled = false;
}

btn3.onclick = () => {
    var list = document.getElementById("select2");

    var id = list.value;

    db.transaction(function (tx) {
        tx.executeSql("DELETE FROM LAB5DB WHERE rowid ='" + id + "'");
        console.log(id);
    });
    db.transaction(function (tx) {
        location.reload();
        btn4.disabled = false;
        btn5.disabled = false;
    });
}

btn4.onclick = () => {
    var nameAutoArr = [];
    var fioArr = [];
    var numAutoArr = [];
    var timeArr = [];
    var adressArr = [];

    db.transaction(function (tx) {
        tx.executeSql('SELECT nameAuto FROM LAB5DB', [], function (tx, res) {
            for (let i = 0; i < res.rows.length; i++) {
                nameAutoArr.push(res.rows.item(i)['nameAuto']);
            }
            console.log(res.rows.item(0));
        });
        tx.executeSql('SELECT fio FROM LAB5DB', [], function (tx, res) {
            for (let i = 0; i < res.rows.length; i++) {
                fioArr.push(res.rows.item(i)['fio']);
            }
            console.log(res.rows.item(0));
        });
        tx.executeSql('SELECT numAuto FROM LAB5DB', [], function (tx, res) {
            for (let i = 0; i < res.rows.length; i++) {
                numAutoArr.push(res.rows.item(i)['numAuto']);
            }
            console.log(res.rows.item(0));
        });
        tx.executeSql('SELECT time FROM LAB5DB', [], function (tx, res) {
            for (let i = 0; i < res.rows.length; i++) {
                timeArr.push(res.rows.item(i)['time']);
            }
            console.log(res.rows.item(0));
        });
        tx.executeSql('SELECT adress FROM LAB5DB', [], function (tx, res) {
            for (let i = 0; i < res.rows.length; i++) {
                adressArr.push(res.rows.item(i)['adress']);
            }
            console.log(res.rows.item(0));
        });
    });

    db.transaction(function (tx) {
        deleteTable(2);
        createTable(nameAutoArr.length);
        let tbl = document.querySelector('#elem');

        for (let i = 1; i < nameAutoArr.length + 1; i++) {
            tbl.rows[i].cells[0].innerText = nameAutoArr[i - 1];
        }

        for (let i = 1; i < fioArr.length + 1; i++) {
            tbl.rows[i].cells[1].innerText = fioArr[i - 1];
        }

        for (let i = 1; i < numAutoArr.length + 1; i++) {
            tbl.rows[i].cells[2].innerText = numAutoArr[i - 1];
        }

        for (let i = 1; i < timeArr.length + 1; i++) {
            tbl.rows[i].cells[3].innerText = timeArr[i - 1];
        }

        for (let i = 1; i < adressArr.length + 1; i++) {
            tbl.rows[i].cells[4].innerText = adressArr[i - 1];
        }

        btn4.disabled = true;
        btn5.disabled = false;
    });
}

btn5.onclick = () => {
    var db = openDatabase('Laba5', '1.0', 'LAB5DB', 1000000);
    var nameAutoArr = [];
    var fioArr = [];
    var numAutoArr = [];
    var timeArr = [];
    var adressArr = [];

    db.transaction(function (tx) {
        tx.executeSql('SELECT nameAuto FROM LAB5DB', [], function (tx, res) {
            for (let i = 0; i < res.rows.length; i++) {
                nameAutoArr.push(res.rows.item(i)['nameAuto']);
            }
            console.log(res.rows.item(0));
        });
        tx.executeSql('SELECT fio FROM LAB5DB', [], function (tx, res) {
            for (let i = 0; i < res.rows.length; i++) {
                fioArr.push(res.rows.item(i)['fio']);
            }
            console.log(res.rows.item(0));
        });
        tx.executeSql('SELECT numAuto FROM LAB5DB', [], function (tx, res) {
            for (let i = 0; i < res.rows.length; i++) {
                numAutoArr.push(res.rows.item(i)['numAuto']);
            }
            console.log(res.rows.item(0));
        });
        tx.executeSql('SELECT time FROM LAB5DB', [], function (tx, res) {
            for (let i = 0; i < res.rows.length; i++) {
                timeArr.push(res.rows.item(i)['time']);
            }
            console.log(res.rows.item(0));
        });
        tx.executeSql('SELECT adress FROM LAB5DB', [], function (tx, res) {
            for (let i = 0; i < res.rows.length; i++) {
                adressArr.push(res.rows.item(i)['adress']);
            }
            console.log(res.rows.item(0));
        });
    });

    db.transaction(function (tx) {//для max min
        deleteTable(nameAutoArr.length);
        createTable(2);
        let tbl = document.querySelector('#elem');

        var min = Math.min.apply(Math, timeArr);
        var max = Math.max.apply(Math, timeArr);
        console.log(timeArr);
        var indMin = 0;
        var indMax = 0;

        for (let i = 0; i < timeArr.length; i++) {
            if (min == timeArr[i]) {
                indMin = i;
            }
        }
        for (let i = 0; i < timeArr.length; i++) {
            if (max == timeArr[i]) {
                indMax = i;
            }
        }

        tbl.rows[1].cells[0].innerText = nameAutoArr[indMin];
        tbl.rows[1].cells[1].innerText = fioArr[indMin];
        tbl.rows[1].cells[2].innerText = numAutoArr[indMin];
        tbl.rows[1].cells[3].innerText = timeArr[indMin];
        tbl.rows[1].cells[4].innerText = adressArr[indMin];

        tbl.rows[2].cells[0].innerText = nameAutoArr[indMax];
        tbl.rows[2].cells[1].innerText = fioArr[indMax];
        tbl.rows[2].cells[2].innerText = numAutoArr[indMax];
        tbl.rows[2].cells[3].innerText = timeArr[indMax];
        tbl.rows[2].cells[4].innerText = adressArr[indMax];

        btn4.disabled = false;
        btn5.disabled = true;
    });
}

btn6.onclick = () => {
    Info.prototype.adress = "";
    console.log(info);
    createTxtField();
}

btn7.onclick = () => {
    db.transaction(function (tx) {
        tx.executeSql('SELECT* FROM LAB5DB', [], function (tx, res) {        
            alert(res.rows.length);
        });
    });
}


function createTxtField() {
    var div = document.getElementById("txtFld");
    var div2 = document.getElementById("txtFld2");
    var p = document.createElement('p');
    p.innerText = "Введите адрес клиента: ";
    var input = document.createElement('input');
    input.className = "input5";
    input.id = "txt5"
    input.size=30;
    input.placeholder = "Введите адрес";
    div.appendChild(p);
    div2.appendChild(input);
    btn6.disabled = true;
}

function createTable(rows) {
    console.log(rows);
    var table = document.getElementById("elem");
    for (var i = 0; i < rows; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 5; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function deleteTable(rows) {
    console.log(rows);
    for(var i =0; i<rows; i++) {
        if (document.querySelectorAll("tr").length !== 1) {
            table = document.querySelector("table");
            table.removeChild(table.lastElementChild);
        }
    }
}

function createList() {
    var div = document.getElementById("listDel");
    var slct = document.createElement('select');
    slct.id = "select2";
    db.transaction(function (tx) {
        tx.executeSql('SELECT rowid FROM LAB5DB', [], function (tx, res) {
            for (let i = 0; i < res.rows.length; i++) {
                var op = document.createElement('option');
                op.text = res.rows.item(i)['rowid'];
                slct.appendChild(op);
            }
        });
    });
    div.appendChild(slct);

}
