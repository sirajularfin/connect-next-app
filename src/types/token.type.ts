import mongoose, { Model, Schema } from 'mongoose';

interface ITokenResponse {
  userId: string;
  refreshToken: string;
  accessToken: string;
  createdAt: Date;
  tokenExpiry: Date;
}

const tokenSchema: Schema<ITokenResponse> = new Schema({
  userId: { type: String, required: true },
  accessToken: { type: String, required: true, unique: true },
  refreshToken: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  tokenExpiry: { type: Date, required: true },
});

const Token: Model<ITokenResponse> = mongoose.model<ITokenResponse>(
  'Token',
  tokenSchema
);

export default Token;
