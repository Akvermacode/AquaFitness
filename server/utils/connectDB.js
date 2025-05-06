// import mongoose from "mongoose";

// const connectDB = (url) => {
//     mongoose.connect(url).then(() => console.log("connected mongodb successfully")).catch((err) => console.log(err || "mongodb not connected") );
// }

// export default connectDB;
import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DataBase Connected");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/fitnessApp`);
};

export default connectDB;