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

        var htmlStructure="";
        result.grupos.forEach(function (element) {

            htmlStructure += "<div id=group-" + element.id + ">"
                
            element.integrantes.forEach(function (element){
                htmlStructure += "<div>" + element + "</div>"
            })

            htmlStructure += "</div>"
        });


        $('#container').append(htmlStructure)

    }
    fr.readAsText(files.item(0));
};