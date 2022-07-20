const mongoose = require("mongoose");

//* defining data types : schema
const personScema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, "minimum 3 chars"],
    maxlength: [10, "maximum 10 chars"],
    // validation function
    //validate:()=>{// custom validator}
  },
  lastName: String,
  email: String,
  age: Number,
  bio: String,
  single: Boolean,
});

//* defining model
const Person = mongoose.model("Person", personScema);

mongoose
  .connect("mongodb://localhost:27017/mon-demo", {
    serverSelectionTimeoutMS: 100,
  })
  // protocol://host:port/db_name.
  //mongoose connect returns a promise
  .then(async () => {
    console.log(`db connected`);
    const person = new Person({
      firstName: "11",
    }); // creating an instance on Person class
    //* locally data ke store/calculate kre, finally sob thik thak thakle tarpor .save() call kore db te save krbo
    // const person = new Person({
    //   firstName: "Alvi",
    //   lastName: "Roy",
    // });

    //*------------- saving it to DB ---------------
    await person.save();
    console.log(person);

    //* ------------- query (data FIND) ---------------
    // const people = await Person.find({ firstName: "Alvi" });
    // // find({query})
    // // jar jar firstname e alvi ase tader find kore dibe
    // console.log(people);
  })
  .catch((e) => {
    //* if we dont use catch node will give error
    console.log(e);
  })
  .finally(() => {
    mongoose.connection.close();
  });
