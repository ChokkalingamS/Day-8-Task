class Uberprice
{
    constructor(name,distance,price)
    {   
        this.name=name;
        this.DistanceCovered=distance;

        switch(name)
        {
            case "Uber Delivers":
            {   
                price=8;
                this.price=price
                break;
            }
            case "Go Executive":
            {
                price=11.46
                this.price=price;
                break;
            }
            case "UberGo":
            {   
                price=11.46
                this.price=price;
                break;
            }
            case "Go Sedan":
            {
                price=12.25
                this.price=price;
                break;
            }
            case "Premier Executive":
            {
                price=14.22
                this.price=price;
                break;
            }
            case "Premier":
            {
                price=14.22
                this.price=price;
                break;
            }
            case "Go Intercity":
            {
                price=15.79
                this.price=price;
                break;
            }
            
            case "Sedan Intercity":
            {
                price=17.50
                this.price=price;
                break;
            }
            case "UberXL":
            {
                price=19.76
                this.price=price;
                break;
            }
            case "XL Intercity":
            {
                price=23.30
                this.price=price;
                break;
            }
        }
    }

   calculatePrice()
   {
     let FinalPrice=this.price*this.DistanceCovered;
     console.log(`
     Vechile Name       : ${this.name}
     Price per km       : Rs ${this.price}
     Distance Covered   : ${this.DistanceCovered} km
     FarePrice          : Rs ${Math.round(FinalPrice)}`);
    }

}


let Customer1=new Uberprice("Uber Delivers",2);
Customer1.calculatePrice();


let Customer2=new Uberprice("Go Executive",3);
Customer2.calculatePrice();


let Customer3=new Uberprice("UberGo",4);
Customer3.calculatePrice();


let Customer4=new Uberprice("Go Sedan",5);
Customer4.calculatePrice();


let Customer5=new Uberprice("Premier Executive",6);
Customer5.calculatePrice();


let Customer6=new Uberprice("Premier",7);
Customer6.calculatePrice();


let Customer7=new Uberprice("Go Intercity",8);
Customer7.calculatePrice();


let Customer8=new Uberprice("Sedan Intercity",9);
Customer8.calculatePrice();


let Customer9=new Uberprice("UberXL",10);
Customer9.calculatePrice();


let Customer10=new Uberprice("XL Intercity",11);
Customer10.calculatePrice();




