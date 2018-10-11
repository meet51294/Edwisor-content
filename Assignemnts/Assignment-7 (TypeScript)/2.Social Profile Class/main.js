//Defining a class
var Facbook = /** @class */ (function () {
    function Facbook(name, address, birthDate, gender, languages, phoneNumber, websites) {
        var _this = this;
        this.name = name;
        this.address = address;
        this.birthDate = birthDate;
        this.gender = gender;
        this.languages = languages;
        this.phoneNumber = phoneNumber;
        this.websites = websites;
        //method
        this.getGender = function () {
            return _this.gender;
        };
        this.name = name;
        this.address = address;
        this.birthDate = birthDate;
        this.gender = gender;
        this.languages = languages;
        this.phoneNumber = phoneNumber;
        this.websites = websites;
    } //end constructor
    return Facbook;
}()); //end class
var facbookUser = new Facbook("Mohit", "Pune", 5 / 12 / 1994, "Male", "English", 8275398156);
console.log(facbookUser.getGender());
