//  Movie class
class Movie {
  constructor(title, studio, rating = "PG") {
    this.MovieTitle = title;
    this.StudioName = studio;
    this.ratingforMovie = rating;
  }
}

const Object = new Movie("leo", "leoStudio", "8.5");
console.log(object.MovieTitle);
console.log(object.StudioName);
console.log(object.ratingforMovie);

const SetObject = new Movie("Casino Royale", "Eon Production", "PG13");
console.log(SetObject.MovieTitle);
console.log(SetObject.StudioName);
console.log(SetObject.ratingforMovie);

//PERSON CLASS
class Person {
  constructor(name, age, gender, materialstatus, contact, email) {
    this.myname = name;
    this.age = age;
    this.gender = gender;
    this.materialstatus = materialstatus;
  }
}

const ObjPerson = new Person(
  "Hariharan",
  21,
  "male",
  "single",
  8754872615,
  "hari14022002@gmail.com"
);
console.log(ObjPerson.myname);
