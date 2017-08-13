import mongoose from 'mongoose'

const connection = mongoose.connection(process.env.MONGO_URL)

export default connection
