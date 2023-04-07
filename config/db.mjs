import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();




const connect = (url) => {
  return mongoose.connect(process.env.MONGO_PATH)
}
export default connect

