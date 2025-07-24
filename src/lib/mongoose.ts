import mongoose from 'mongoose';

import logger from '@/util/logger.util';

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongoose: MongooseCache | undefined;
}

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI as string;

if (!MONGODB_URI) {
  logger('Please define the MONGODB_URI environment variable', 'error');
}

const cached: MongooseCache = global.mongoose ?? { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectToDatabase() {
  if (cached.conn) {
    logger(`Using cached MongoDB connection`);
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: process.env.NEXT_PUBLIC_MONGODB_DB_NAME,
        bufferCommands: false,
      })
      .then(mongoose => {
        logger(`Connected to MongoDB!!`);
        return mongoose;
      });
  }

  cached.conn = await cached.promise;
  logger(`MongoDB connection established successfully`);
  return cached.conn;
}
