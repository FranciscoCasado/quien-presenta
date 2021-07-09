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
        clearBox('container');
        result.grupos.forEach(function (element) {

            htmlStructure += "<div class=group id=group-" + element.id + "> <div class=group-header> #" + element.id + "</div>"

            var person_id = 1;    
            element.integrantes.forEach(function (person_name){
                htmlStructure += "<div class=person id=group-" + element.id + "-" + person_id + ">" + person_name + "</div>"
                person_id++;
            })

            htmlStructure += "</div>"
        });


        $('#container').append(htmlStructure)

    }
    fr.readAsText(files.item(0));
};

var group_id = "";

document.getElementById('group').onclick = function () {
    var total_groups = document.getElementById('container').childElementCount;
    group_id = "group-" + randomInt(1,total_groups);
    clearGroups();
    clearPeople();
    document.getElementById(group_id).style.background = '#ccdbfd';

}

document.getElementById('presenter').onclick = function () {
    var total_people = document.getElementById(group_id).childElementCount -1;
    var person_id = group_id + "-" + randomInt(1,total_people);
    clearPeople();
    console.log(person_id)
    document.getElementById(person_id).style.background = '#ffeedd';

}



function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

function clearGroups() {
    var elements = document.getElementsByClassName("group");
    Array.prototype.forEach.call (elements, function(element) {
        element.style.background = "white";
    });
}

function clearPeople() {
    var elements = document.getElementsByClassName("person");
    Array.prototype.forEach.call (elements, function(element) {
        element.style.background = "none";
    });
}

function randomInt (min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};