/*jslint browser:true */
/*jslint devel: true */
/*global $, jQuery, alert, FileReader*/

/* Global variable for setting group id
   (probably not the best way to implement this) */
var group_id = "";

/* Input element handlers*/
var groupButton = document.getElementById('group'),
    presenterButton = document.getElementById('presenter'),
    importButton = document.getElementById('import');


var randomProperty = function (obj) {
    "use strict";
    var keys = Object.keys(obj);
    return obj[keys[Math.floor(keys.length * Math.random())]];
};

function randomInt(min, max) {
    "use strict";
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function clearBox(elementID) {
    "use strict";
    document.getElementById(elementID).innerHTML = "";
}

function clearGroups() {
    "use strict";
    var elements = document.getElementsByClassName("group");
    Array.prototype.forEach.call(elements, function (element) {
        element.style.background = "white";
    });
}

function clearPeople() {
    "use strict";
    var elements = document.getElementsByClassName("person");
    Array.prototype.forEach.call(elements, function (element) {
        element.style.background = "none";
    });
}

/* Highlight a group element
 * when #group button is clicked */
groupButton.onclick = function () {
    "use strict";
    var total_groups = document.getElementById('container').childElementCount;

    /* Remember group_id is global */
    group_id = "group-" + randomInt(1, total_groups);

    clearGroups();
    clearPeople();

    document.getElementById(group_id).style.background = '#ccdbfd';
};

/* Highlight a person inside the current highlighted element
 *  when #presenter button is clicked */
presenterButton.onclick = function () {
    "use strict";
    var total_people = document.getElementById(group_id).childElementCount - 1,
        person_id = group_id + "-" + randomInt(1, total_people);

    clearPeople();

    document.getElementById(person_id).style.background = '#ffeedd';
};


/* Build the HTML elements for groups and people, based on the imported .json file */
importButton.onclick = function () {
    "use strict";
    var files = document.getElementById('selectFiles').files,
        fr = new FileReader();

    console.log(files);
    if (files.length <= 0) {
        return false;
    }

    fr.onload = function (e) {
        console.log(e);
        var result = JSON.parse(e.target.result),
            htmlStructure = "";

        clearBox('container');
        result.grupos.forEach(function (element) {

            htmlStructure += "<div class=group id=group-" + element.id + "> <div class=group-header> #" + element.id + "</div>";

            var person_id = 1;
            element.integrantes.forEach(function (person_name) {
                htmlStructure += "<div class=person id=group-" + element.id + "-" + person_id + ">" + person_name + "</div>";
                person_id += 1;
            });

            htmlStructure += "</div>";
        });

        $('#container').append(htmlStructure);

    };
    fr.readAsText(files.item(0));
};