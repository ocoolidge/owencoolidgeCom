//////////WORK_HOVER/////////

var newId

function textOnHover(id) {
    newId = id.substring(0, id.length - 1);
    document.getElementById(newId + 'T').style.backgroundColor = 'black';
    document.getElementById(newId + 'T').style.color = 'white';
    document.getElementById(newId + 'I').style.opacity = 1;
}

function textOffHover(id) {
    newId = id.substring(0, id.length - 1);
    document.getElementById(newId + 'T').style.backgroundColor = 'transparent';
    document.getElementById(newId + 'T').style.color = 'black';
    document.getElementById(newId + 'I').style.opacity = 1;
}

//////////BUTTONS/////////

window.onload = function() {
    var workButton = document.getElementById('workButton');
    var bioButton = document.getElementById('bioButton');
    //var contactButton = document.getElementById('contactButton');

    bioButton.onclick = function() {
        var workContent = document.getElementById('workContent');
        var bioContent = document.getElementById('bioContent');
        //var contactContent = document.getElementById('contactContent');

        workButton.className = "";
        bioButton.className = "selected";
        //contactButton.className = "";

        workContent.style.display = 'none';
        bioContent.style.display = 'block';
        //contactContent.style.display = 'none';
    };
    /*  contactButton.onclick = function() {
          var workContent = document.getElementById('workContent');
          var bioContent = document.getElementById('bioContent');
          var contactContent = document.getElementById('contactContent');

          workButton.className = "";
          bioButton.className = "";
          contactButton.className = "selected";

          workContent.style.display = 'none';
          bioContent.style.display = 'none';
          contactContent.style.display = 'block';
      };*/
    workButton.onclick = function() {
        var workContent = document.getElementById('workContent');
        var bioContent = document.getElementById('bioContent');
        //var contactContent = document.getElementById('contactContent');

        workButton.className = "selected";
        bioButton.className = "";
        //contactButton.className = "";

        workContent.style.display = 'block';
        bioContent.style.display = 'none';
        //contactContent.style.display = 'none';
    };
};
