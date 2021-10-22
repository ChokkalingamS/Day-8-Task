class person
{
    constructor(name,address,qualification,Specialization,phno,skills)
    {
        this.name=name;
        this.address=address;
        this.qualification=qualification;
        this.specialization=Specialization;
        this.phno=phno;
        this.skills=skills;
    }
    getname()
    {
        console.log(this.name);
    }
}

let person1=new person("Chokkalingam.S","1,south car street,Bangalore","B.E","EEE",9632587410,"coding");
let person2=new person("Aravind.S","2,North car street,chennai","B.E","EEE",9876543210,"Acting");
let person3=new person("Manoharan.S","3,West car street,Coimbatore","B.E","EEE",9258741360,"Batting");
let person4=new person("Franklin.D","4,East car street,Punjab","B.E","EEE",8147253699,"Desginer");
let person5=new person("Karthick.K","5,south car street,chennai","B.E","EEE",8693251470,"Business Management");
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);

