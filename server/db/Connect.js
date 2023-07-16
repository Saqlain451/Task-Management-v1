import mongoose from "mongoose";

const mongoDbConnect = async (uri) => {
    try {
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Mongodb connected");
    } catch (err) {
        console.error(err)
    }
}

export default mongoDbConnect;