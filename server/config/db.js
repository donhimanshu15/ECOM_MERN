const mongoose = require("mongoose");
try {
  mongoose.connect(" mongodb+srv://himanshu15:himanshu15@cluster0.4cour.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
