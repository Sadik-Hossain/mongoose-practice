const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/testdb");
/** inside mongoose there are 3 main concepts to understand:
 * - schema: define the structure of the data
 * - model: schema in an actual form that we can use, for example: an individual user obj from the db
 * - query: query is essentially a query youre making against the db. for ex: find, limit, insert, delete, update
 * */
const User = require("./schema/User");
run();
async function run() {
  //* creating a new record in local memory
  const user = await User.create({ name: "kyle", age: 26 });

  user.name = "Sally"; // locally we are changing name value, before saving it to db

  await user.save();
  // const user = new User ({name:"Kyle", age:26}) // line 12 and 17 works the same
  // await user.save()

  console.log(user);
}
//* ---------------- promise based ------------------
// const user = new User({ name: "kyle", age: 26 });
// user.save().then(() => {
//   console.log(`User added in db`);
// });
