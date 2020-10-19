// tipe data
nama = "admin"
nama2 = "Admin"
namaPanjang = "istrator"
var umur = 22
var umur2 = "21"
umurBonus = 40
var menikah = false
var tinggi = 1.75
var list = [1, 2, 3, 4, 5] // array
var hobby = ["membaca", "menulis", "berhitung", 5, false]
var obj = { // object
    "nama": "admin",
    "umur": 21,
    "menikah": false,
    "hobby": ["membaca", "menulis"]
}

var listUser = [{
    "nama": "user",
    "umur": 12,
    "menikah": true,
    "hobby": ["berhitung", "menulis"]
}, obj]


console.log(list[3]);
console.log(obj["nama"]);
console.log(obj.nama);
console.log(listUser[0]["hobby"][1]);

// list = [list[0], list[1], list[2], 40, 50, 60, list[3], list[4]]

// tengah
console.log(list);
list.splice(3, 0, 999)
console.log(list);
list.splice(3, 3)
console.log(list);

list[3] = 10
// belakang
console.log(list);
list.push(25)
console.log("push: ", list);
list.pop()
console.log("pop: ", list);
// depan
list.shift()
console.log("shift: ", list);
list.unshift(33)
console.log("unshift: ", list);


obj.nama = "Administrator"
console.log(obj);


var statusAdmin = (nama == "Admin")
console.log("statusAdmin: ", statusAdmin);

console.log(nama);
console.log(namaPanjang);
console.log("fullname: ", nama + namaPanjang);

console.log(menikah);
console.log(tinggi);

// comparator => true/false
console.log(umur > umurBonus);
console.log(umur < umurBonus);
console.log(umur <= umurBonus);
console.log(umur >= umurBonus);
console.log(umur != umurBonus);
console.log(umur && umurBonus);
console.log(umur || umurBonus);
console.log("== ", umur == umur2); // membandingkan hanya value
console.log("=== ", umur === umur2); // membandingkan value & tipe data

console.log(umurBonus);
console.log("+ ", umur + umurBonus);
console.log("* ", umur * umurBonus);
console.log("/ ", umur / umurBonus);
console.log("- ", umur - umurBonus);


// condition
if (umur > 21 && nama == "admin") { // harus boolean
    console.log("umur > 21")
} else if (umur > 18) { // harus boolean
    console.info("umur > 18")
} else {
    console.warn("umur < 18")
}


if (name == "admin") {
    console.log("Switch admin");
} else {
    console.log("Switch default");
}

// disini contoh switch

/*
    ini comment multi
    line
*/

switch (nama) {
    case "admin":
        console.log("Switch admin");
        break;

    case "Admin":
        console.log("Switch Admin");
        break;

    default:
        console.log("Switch default");
        break;
}


// looping
function showData(e) {
    e.preventDefault();
    var tableData = document.getElementsByClassName("tableData")[0]
    // console.log(tableData.firstElementChild.firstChild.outerHTML);
    var tr = tableData.firstElementChild.firstChild.outerHTML
    for (index = 0; index < listUser.length; index++) {
        // continue
        // break
        var user = listUser[index]
        console.warn(user);
        // ==== cara 1
        // var tr1 = document.createElement("tr")
        // var td1 = document.createElement("td")
        // var td2 = document.createElement("td")
        // var td3 = document.createElement("td")

        // td1.innerHTML = index + 1
        // td2.innerHTML = user.nama
        // td3.innerHTML = user.umur

        // tr1.appendChild(td1)
        // tr1.appendChild(td2)
        // tr1.appendChild(td3)

        // ==== cara 2
        // tableData.appendChild(tr1)
        // tr += "<tr>" +
        //     "<td>" + (index + 1) + "</td>" +
        //     "<td>" + user.nama + "</td>" +
        //     "<td>" + user.umur + "</td>" +
        //     "</tr>"

        if (index == 1) {
            // DOM Manipulation
            console.log(document.getElementById("inputNama").value);
            var inputNama = document.form1.nama
            console.log(inputNama.value);
            inputNama.value = user.nama
        }

        // ==== cara 3
        tr += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.nama}</td>
                <td>${user.umur}</td>
            </tr>
        `
    }
    // DOM manipulation
    tableData.innerHTML = tr
}
// showData()

var no = 1
var status1 = true
while (status1) {
    console.log("no: ", no);
    console.log("status: ", status1);

    if (no == 10) {
        status1 = false
    }

    no += 1
}


function submitForm() {
    console.error("function called!!")
}

function tambah2an(a, b) {
    // var a = 10
    // var b = 20
    var c = a + b
    console.error("c: ", c)
    return c
}

var tambah1 = tambah2an(10, 20)
console.log(tambah1);
var tambah2 = tambah2an(20, tambah1)
tambah2an(30, tambah2)

document.getElementById("div1").style.backgroundColor = "grey"

function divButton(value) {
    document.getElementById("div1").style.display = value
}

/*
    Latihan:
    - tampilkan data yang diinput oleh halaman pendaftaran kalo sudah login
    - data tersebut harus bisa ubah data & hapus data

    Tugas:
    - update web menjadi 1 file html
    - data yang sudah di register, harus bisa login
*/