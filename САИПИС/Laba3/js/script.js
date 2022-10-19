var counter = 0;
var nameArr = [];
var secondnameArr = [];
var familArr = [];
var emailArr = [];
var phonesArr = [];
var dateArr = [];
var colorArr = [];
var exhibitionArr=[];

function validate () {
    let bool = true;
    if (document.getElementById('name').value==="" || document.getElementById('model').value==="Нет"
        || document.getElementById('PurchaseDate').value==="") {
        if(document.getElementById('name').value==="")
            alert("Заполните поле \"Имя\"");
        if(document.getElementById('model').value==="Нет")
            alert("Выберите понравившуюся модель");
        if(document.getElementById('PurchaseDate').value==="")
            alert("Выберите дату покупки");
        bool=false;
    }
    if(bool) {
        nameArr[counter]=document.getElementById('name').value;
        secondnameArr[counter]=document.getElementById('secondname').value;
        familArr[counter]=document.getElementById('familia').value;
        emailArr[counter]=document.getElementById('email').value;
        phonesArr[counter]=document.getElementById('model').value;
        dateArr[counter]=document.getElementById('PurchaseDate').value;
        colorArr[counter]=document.getElementById('color').value;
        exhibitionArr[counter]=document.getElementById('number').value;
        counter++;
    }
}

function ShowAll () {
    var newWindow = window.open('', "Итоговые данные", "menubar=no,scrollbars=yes,width=1300px,height=500px");
    newWindow.document.write('<!DOCTYPE html>\n' +
        '<html lang="ru">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Опрос</title>\n' +
        '    <link href="../css/style.css" rel="stylesheet">\n' +
        '    <script type="text/javascript" src="../js/script.js"></script>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div class="wrapper">' +
        '<header class="header">' +
        '<h1 class="h1">' +
        'Магазин мобильных телефонов' +
        '</h1>' +
        '</header>' +
        '<article class = "main">' +
        '<p>' + tabl() +'</p>'+
        '\n' +
        '</article>' +
        '<nav id="nav">\n' +
        '\n' +
        '        <button name="send" type="button" onclick="window.close()">Главная</button>\n' +
        '        <br><br>\n' +
        '        <button name="send" type="button" disabled>Результаты</button>' +
        '</nav>\n' +
        '    <aside><p id="anons">АНОНС</p>\n' +
        '    <p>iPhone 15: новейший дисплей, скрытые сенсоры в Pro</p></aside>\n' +
        '    <footer>\n' +
        '        <p class="p1">Минск, 2021<br>ул. Я. Коласа, 28</p>\n' +
        '    </footer>\n' +
        '</div>\n' +
        '</body>\n' +
        '</html>')
}

function tabl() {
    var html =
        "<table border='4px' id='tableNames'>" +
        "<tr>" +
        "<th>Имя</th>" +
        "<th>Отчество</th>" +
        "<th>Фамилия</th>" +
        "<th>Адрес почты</th>" +
        "<th>Модель телефона</th>" +
        "<th>Цвет</th>" +
        "<th>Дата покупки</th>" +
        "<th>Оценка обслуживания</th>" +
        "</tr>";
    for(var i=0; i<nameArr.length;i++) {
        html=html+"<tr>" +
            "<td>"+ nameArr[i]+"</td>" +
            "<td>"+ secondnameArr[i]+"</td>" +
            "<td>"+ familArr[i]+"</td>" +
            "<td>"+ emailArr[i]+"</td>" +
            "<td>"+ phonesArr[i]+"</td>" +
            "<td>"+ colorArr[i]+"</td>" +
            "<td>"+ dateArr[i]+"</td>" +
            "<td>"+ exhibitionArr[i]+"</td>" +
            "</tr>";
    }
    html+="</table>";
    html+= "<optgroup align='center' label='Список пользователей'>";
    for(i=0; i<nameArr.length;i++) {
        html=html+
            "<option>" + nameArr[i] + "</option>";
    }
    html+= "</optgroup>";
    return html;
}

function clearArr() {
    nameArr.clearData();
}