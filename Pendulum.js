class pendulum{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length:10

        }
this.pointB = pointB;
this.pend = Constraint.create(options)
        World.add(world,this.pend);
    }
    display(){
        var pointA = this.pend.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}

