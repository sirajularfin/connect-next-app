import mongoose from 'mongoose';

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongoose: MongooseCache | undefined;
}

const DATABASE_URL = process.env.DATABASE_URL as string;

if (!DATABASE_URL) {
  throw new Error('Please define the DATABASE_URL environment variable');
}

const cached: MongooseCache = global.mongoose ?? { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(DATABASE_URL, {
        dbName: 'CONNECT_NEXT_APP',
        bufferCommands: false,
      })
      .then(mongoose => {
        return mongoose;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
