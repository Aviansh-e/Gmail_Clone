import mongoose from 'mongoose';
const { Schema } = mongoose;

const EmailSchema = new Schema({
    to: {
        type: String,
        // required: true  // This field is required
    },
    from: {
        type: String,
        // required: true  // This field is required
    },
    subject: String,
    body: String,
    date: {
        type: Date,
        // required: true  // This field is required
    },
    Image: String,
    name: {
        type: String,
        // required: true (You can uncomment if this should be required)
    },
    starred: {
        type: Boolean,
        // required: true (You can uncomment if this should be required)
        default: false
    },
    bin: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        // required: true (You can uncomment if this should be required)
    }
});

const email = mongoose.model('gmail', EmailSchema);
export default email;
