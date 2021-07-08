var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

document.getElementById('import').onclick = function () {
    var files = document.getElementById('selectFiles').files;
    console.log(files);
    if (files.length <= 0) {
        return false;
    }

    var fr = new FileReader();

    fr.onload = function (e) {
        console.log(e);
        var result = JSON.parse(e.target.result);
        var formatted = JSON.stringify(result, null, 2);
        document.getElementById('result').value = formatted;

        var htmlStructure="";
        result.grupos.forEach(function (element) {

            htmlStructure += "<li>" + element.id + ' ' + element.integrantes + "</li>"
        });


        $('#container').append(htmlStructure)

    }
    fr.readAsText(files.item(0));
};