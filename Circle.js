class circle

{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
        
    }
getarea()
{
    console.log(`Area of a circle : ${Math.round(2*Math.PI*Math.pow(this.radius,2))}sqcm`);
}

getcircumference()
{
    console.log(`Area of a circumference : ${Math.round(2*Math.PI*this.radius)}sqcm`);
}



}

let area=new circle(2);
area.getarea();

let circumference=new circle(2);
circumference.getcircumference();

