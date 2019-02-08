"use strict";
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

$(document).ready(function () {
    particlesJS.load('particles-js', 'assets/js/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

    let whiteNoise = () => {
        let ctx = canvas.getContext('2d');
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        let p = ctx.getImageData(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(function draw() {
            for (var i = 0; i < p.data.length; i++) {
                p.data[i++] = p.data[i++] = p.data[i++] = Math.random() * 255;
            }
            ctx.putImageData(p, 0, 0);
            requestAnimationFrame(draw);
        });
        return canvas;
    }

    let stream = whiteNoise().captureStream();
    // video.srcObject = stream;

    //form 

    $('#form').submit(function(){

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function(){
            $('#form').addClass('loaded');
        }).fail(function(){
            $('#form').addClass('error');
        });
        return false
    })
});