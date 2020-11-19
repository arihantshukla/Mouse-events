class Slingshot{
constructor(bodyA,pointB){
    var options = {
        bodyA:bodyA,
        pointB:pointB,
        length:20,
        stiffness:0.02
    }
    this.sling=Constraint.create(options)
    World.add(world,this.sling)
    this.bodyA=bodyA
    this.pointB=pointB
}
fly(){
    this.sling.bodyA=null;
}
display(){
  if(this.sling.bodyA){
    var pointA=this.sling.bodyA.position
    var pointB=this.sling.pointB
    strokeWeight(3)
    line(pointA.x,pointA.y,pointB.x,pointB.y)}
}
}