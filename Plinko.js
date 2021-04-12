class Plinko{
    constructor(x, y) {
        var options = {
            'isStatic' : false,
            'restitution':0.7,
            'friction':0.5,
            'density':1
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,5,5);
        pop();
      }
}