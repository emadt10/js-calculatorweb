let dis = document.getElementById("displayno");

function disp(x) {
    dis.value += x;
}

function deleteLast() {
    dis.value = dis.value.toString().slice(0, -1);
}

function del() {
    dis.value = "";
}

function calcu() {
    dis.value = eval(dis.value);
}
