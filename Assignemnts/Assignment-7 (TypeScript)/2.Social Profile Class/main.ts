//Defining a class

class Facbook{

    constructor(public name : string, public address : string, public birthDate : number,  public gender : string,
                public languages : string, public phoneNumber : number, public websites? : string){

                    this.name = name;
                    this.address = address;
                    this.birthDate = birthDate;
                    this.gender = gender;
                    this.languages = languages;
                    this.phoneNumber = phoneNumber;
                    this.websites = websites;
                    

    }//end constructor

    //method
    getGender = () =>{
        return this.gender
    }

} //end class

let facbookUser = new Facbook ("Mohit", "Pune", 5/12/1994, "Male", "English", 8275398156)
console.log(facbookUser.getGender())