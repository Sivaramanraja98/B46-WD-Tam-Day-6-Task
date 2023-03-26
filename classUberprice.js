class Uberprice{
    constructor(distance,time)
    {
        this.distance = distance;
        this.time = time;
        this.fare = 3.00;
        this.minfare = 0.5;
        this.kmfare = 2;
    }
    calculation()
    {
        const timecost = this.time * this.minfare;
        const distcost = this.distance * this.kmfare;
        const Uberfare = this.fare+timecost+distcost;
        return Uberfare;
    }
}
const ssrride = new Uberprice(16,120);
console.log(ssrride.calculation());
