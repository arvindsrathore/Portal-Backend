import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    auther: {
        type: String
    },
    company: {
        type: String
    },
    type: {
        type: String,
        enum: ['FTE', 'Internship']
    },
    role: {
        type: String
    },
    content: {
        type: String
    },
    duration: {
        type: String
    }
});

export const Post = mongoose.model('Post',postSchema);