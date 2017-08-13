import mongoose from 'mongoose'

mongoose.Promise = global.Promise;
const connection = mongoose.connect(process.env.MONGO_URL, {
  useMongoClient: true
})

export default connection
