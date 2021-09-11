function readData() {
    let ajax = new XMLHttpRequest();
    ajax.open('GET', 'http://localhost:3000/ajax');
    ajax.onloadend = function() {
        let data = JSON.parse(ajax.response);
        document.getElementById('header').innerHTML = data.header;
        document.getElementById('paragraph').innerHTML = data.paragraph;
        document.getElementById('button').style = "display: none";
    };
    ajax.send();
}