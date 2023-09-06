//////////BUTTONS/////////

window.onload = function() {
    var sketch1Button = document.getElementById('sketch1Button');
    var sketch2Button = document.getElementById('sketch2Button');
    var sketch3Button = document.getElementById('sketch3Button');
    var sketch4Button = document.getElementById('sketch4Button');
    var sketch5Button = document.getElementById('sketch5Button');
    var sketch6Button = document.getElementById('sketch6Button');

    sketch1Button.onclick = function() {

        document.getElementById('webglIframe').src = "../../source/webgl/sketches/physijs_1.html";
        sketch1Button.className = "selected";
        sketch2Button.className = "";
        sketch3Button.className = "";
        sketch4Button.className = "";
        sketch5Button.className = "";
        sketch6Button.className = "";
    };
    sketch2Button.onclick = function() {

        document.getElementById('webglIframe').src = "../../source/webgl/sketches/physijs_trump.html";

        sketch1Button.className = "";
        sketch2Button.className = "selected";
        sketch3Button.className = "";
        sketch4Button.className = "";
        sketch5Button.className = "";
        sketch6Button.className = "";
    };
    sketch3Button.onclick = function() {

        document.getElementById('webglIframe').src = "../../source/webgl/sketches/shadow_cubes.html";

        sketch1Button.className = "";
        sketch2Button.className = "";
        sketch3Button.className = "selected";
        sketch4Button.className = "";
        sketch5Button.className = "";
        sketch6Button.className = "";
    };
    sketch4Button.onclick = function() {

        document.getElementById('webglIframe').src = "../../source/webgl/sketches/reflective_cubes.html";

        sketch1Button.className = "";
        sketch2Button.className = "";
        sketch3Button.className = "";
        sketch4Button.className = "selected";
        sketch5Button.className = "";
        sketch6Button.className = "";

    };

    sketch6Button.onclick = function() {

        document.getElementById('webglIframe').src = "../../source/webgl/sketches/shadow_torus.html";

        sketch1Button.className = "";
        sketch2Button.className = "";
        sketch3Button.className = "";
        sketch4Button.className = "";
        sketch5Button.className = "selected";
        sketch6Button.className = "";

    };
    sketch7Button.onclick = function() {

        document.getElementById('webglIframe').src = "../../source/webgl/sketches/reflective_obj1.html";

        sketch1Button.className = "";
        sketch2Button.className = "";
        sketch3Button.className = "";
        sketch4Button.className = "";
        sketch5Button.className = "";
        sketch6Button.className = "selected";

    };
};
