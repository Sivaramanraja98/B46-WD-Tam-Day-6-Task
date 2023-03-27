class Circle{
    constructor(radius,color)
    {
        this.radius= radius;
        this.color = color;
    }
    getradius()
    {
        return this.radius;
    }
    setradius()
    {
        return this.getradius();
    }
    getcolour()
    {
        return this.color;
    }
    setcolour()
    {
        return this.getcolour();
    }
    getarea()
    {
        return (Math.PI*(this.radius*this.radius)).toFixed(2);
    }
    getcircumference()
    {
        return (Math.PI*(2*this.radius)).toFixed(2);
    }
}

let calc = new Circle(9,'red')
console.log(calc.setcolour());
console.log(calc.setradius());
console.log(calc.getarea());
console.log(calc.getcircumference());
