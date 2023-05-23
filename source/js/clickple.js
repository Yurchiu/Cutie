if(document.getElementById("clickCanvas")) {
    function Particle(x, y, radius) {
        this.init(x, y, radius);
    }
    Particle.prototype = {
        init : function(x, y, radius) {
            this.alive = true;
            this.radius = radius || 10;
            this.wander = 0.15;
            this.theta = random(TWO_PI);
            this.drag = 0.92;
            this.color = '#ffeb3b';
            this.x = x || 0.0;
            this.y = y || 0.0;
            this.vx = 0.0;
            this.vy = 0.0;
        },
        move : function() {
            this.x += this.vx;
            this.y += this.vy;
            this.vx *= this.drag;
            this.vy *= this.drag;
            this.theta += random(-0.5, 0.5) * this.wander;
            this.vx += sin(this.theta) * 0.1;
            this.vy += cos(this.theta) * 0.1;
            this.radius *= 0.96;
            this.alive = this.radius > 0.5;
        },
        draw : function(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };
    var MAX_PARTICLES = 50;
    //圆点颜色库
    var COLOURS = [ "#5ee4ff", "#f44033", "#ffeb3b", "#F38630", "#FA6900", "#f403e8", "#F9D423" ];
    var particles = [];
    var pool = [];
    var clickparticle = Sketch.create({
        container : document.getElementById('clickCanvas')
    });
    clickparticle.spawn = function(x, y) {
        if (particles.length >= MAX_PARTICLES)
            pool.push(particles.shift());
        particle = pool.length ? pool.pop() : new Particle();
        particle.init(x, y, random(5, 20));//圆点大小范围
        particle.wander = random(0.5, 2.0);
        particle.color = random(COLOURS);
        particle.drag = random(0.9, 0.99);
        theta = random(TWO_PI);
        force = random(1, 5);
        particle.vx = sin(theta) * force;
        particle.vy = cos(theta) * force;
        particles.push(particle);
    };
    clickparticle.update = function() {
        var i, particle;
        for (i = particles.length - 1; i >= 0; i--) {
            particle = particles[i];
            if (particle.alive)
                particle.move();
            else
                pool.push(particles.splice(i, 1)[0]);
        }
    };
    clickparticle.draw = function() {
        clickparticle.globalCompositeOperation = 'lighter';
        for ( var i = particles.length - 1; i >= 0; i--) {
            particles[i].draw(clickparticle);
        }
    };
    document.addEventListener("click", function(e) {
        var max, j;
        //排除一些元素
        "TEXTAREA" !== e.target.nodeName && "INPUT" !== e.target.nodeName && "A" !== e.target.nodeName && "I" !== e.target.nodeName && "IMG" !== e.target.nodeName 
        && function() {
            for (max = random(15, 20), j = 0; j < max; j++) 
            clickparticle.spawn(e.clientX, e.clientY);
        }();
    });
}