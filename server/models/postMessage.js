import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    description: String,
    location : String,
    age: Number,
    tags: [String],
    pictures: [String],
    premiumUser: {
        type: Boolean,
        default: false
    }
});
const PostMessage = mongoose.model('userCard',postSchema);
export default PostMessage;
