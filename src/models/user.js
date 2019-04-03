import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, index: { unique: true } },
  password: String,
});
mongoose.model('User', UserSchema);
export default mongoose.model('User');
