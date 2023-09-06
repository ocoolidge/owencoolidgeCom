window.onload = function() {
    var canvas = document.getElementById('mycanvas'),
        context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var wave = new Wave({
        canvas: canvas,
        color: "white",
        shift: -5,
        phase: 1
    });

    var wave2 = new Wave({
        canvas: canvas,
        color: "white",
        shift: -10,
        phase: 3
    });


    var wave3 = new Wave({
        canvas: canvas,
        color: "white",
        shift: -1,
        phase: 2
    });


    function draw() {
        window.requestAnimationFrame(draw);
        wave.clearCanvas();
        wave.redraw();
        wave2.redraw();
        wave3.redraw();
    }

    draw();

}
