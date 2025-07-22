import MongoDbStore from 'connect-mongodb-session';
import session from 'express-session';

const databaseConnect = async () => {
  const { DATABASE_URL } = process.env;
  const mongoDbStore = MongoDbStore(session);

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined in the environment variables');
  }

  return new mongoDbStore({ uri: DATABASE_URL, collection: 'sessions' });
};

export default databaseConnect;
