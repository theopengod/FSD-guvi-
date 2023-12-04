/*function family(arjun,mathan,vikki){
    this.arjun=arjun;
this.vikki=vikki;
this.mathan=mathan;

this.arjunfamily=function(){
    console.log(`welcome arjun family,${arjun}`);
}
this.vikkifamily=function(){
    console.log(`welcome vikki family,${vikki}`);
}
this.mathanfamily=function(){
    console.log(`welcome mathan family,${mathan}`);
}
}
let arj = [""]*/
class person {
    constructor(name,phone,email)
    {
        this.name=name,this.phone=phone,this.email=email;
    }
    callname(){
        console.log(`my name is,${this.name}`);
    }
    callnum(){
        console.log(`my num is,${this.phone}`);
    }
    getemail(){
        console.log(`my mail is,${this,email}`);
    }
    
}
let person111 =new person("arjun",787878,'aj@gmail.com')
//console.log(person111);
person111();