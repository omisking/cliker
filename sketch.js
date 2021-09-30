function clicker() {
    var cv = document.getElementById('clickme').innerHTML;
    var nv = cv - 1;
    document.getElementById('clickme').innerHTML = nv;
}

var nb = document.getElementById('clickme')
var bg = document.getElementById('bagrounds')

nb.style.width = '350px'
nb.style.height = '235px'

function reset() {
    window.location.reload()
}
